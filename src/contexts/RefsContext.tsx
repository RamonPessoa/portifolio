import React, { useContext, useRef } from 'react';

type MyRefs = {
  allRefs: React.MutableRefObject<Refs>;
  buildRefs: (section: Section) => (node: HTMLElement) => void;
};

const refsContext = React.createContext<MyRefs>({} as MyRefs);

type MyProps = {
  children: React.ReactNode;
};

export type Section = 'about' | 'projects' | 'services' | 'skills' | 'nav';
type Refs = Record<Section, HTMLElement>;

export default function RefsContext({ children }: MyProps) {
  const allRefs = useRef<Refs>({} as Refs);

  function buildRefs(section: Section) {
    return (node: HTMLElement) => (allRefs.current[section] = node);
  }

  return (
    <refsContext.Provider value={{ allRefs, buildRefs }}>
      {children}
    </refsContext.Provider>
  );
}

export function useRefs() {
  const context = useContext(refsContext);

  return context;
}
