import React from 'react';
import { ModalContext, MenuContext, RefsContext } from '@imports/contexts';

type MyProps = {
  children: React.ReactNode;
};

export default function GlobalContext({ children }: MyProps) {
  return (
    <ModalContext>
      <MenuContext>
        <RefsContext>{children}</RefsContext>
      </MenuContext>
    </ModalContext>
  );
}
