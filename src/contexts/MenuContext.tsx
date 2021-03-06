import React, { useContext, useState } from 'react';

type myContext = {
  menuDesign: number;
  setMenuDesign?: Function;
};

const menuContext = React.createContext<myContext>({ menuDesign: 1 });

type myProps = {
  children: React.ReactNode;
};

export default function MenuContext(props: myProps) {
  const [menuDesign, setMenuDesign] = useState(1);

  return (
    <menuContext.Provider
      value={{
        menuDesign,
        setMenuDesign,
      }}
    >
      {props.children}
    </menuContext.Provider>
  );
}

export function useMenu() {
  const { menuDesign, setMenuDesign } = useContext(menuContext);

  const handleClick = () => {
    if (setMenuDesign) {
      if (menuDesign === 1 && window.innerWidth < 587) {
        setMenuDesign(2);
      } else {
        setMenuDesign(1);
      }
    }
  };

  return {
    menuDesign,
    setMenuDesign,
    handleClick,
  };
}
