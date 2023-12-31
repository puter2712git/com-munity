'use client';

import { MouseEventHandler, useRef } from 'react';
import UnsignedMenu from './unsigned-menu';

export default function Sidebar({
  isOpened,
  onBGClicked,
}: {
  isOpened: boolean;
  onBGClicked: MouseEventHandler<HTMLDivElement>;
}) {
  const sidebarBackground = useRef(null);

  return (
    <>
      <div
        className={`fixed bottom-0 right-0 top-0 flex h-full w-full transition duration-200 ${
          isOpened ? 'bg-black/20' : 'pointer-events-none bg-black/0'
        }`}
        ref={sidebarBackground}
        onClick={onBGClicked}
      ></div>
      <div
        className={`pointer-events-auto fixed bottom-0 top-0 block h-full w-[250px] transition-all duration-200 ${
          isOpened ? 'right-0 bg-white/100' : 'right-[-250px] bg-white/0'
        }`}
      >
        <div className="mb-12" />
        <UnsignedMenu />
      </div>
    </>
  );
}
