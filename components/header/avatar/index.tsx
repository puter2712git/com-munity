'use client';

import { UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Sidebar from './sidebar';

export default function Avatar() {
  const [isOpened, setIsOpened] = useState(false);

  function handleSidebarBGClick() {
    setIsOpened(false);
  }

  return (
    <>
      <button
        className="sticky z-[99] flex aspect-square h-8"
        onClick={() => setIsOpened(!isOpened)}
      >
        {isOpened ? <XMarkIcon /> : <UserCircleIcon />}
      </button>

      <Sidebar isOpened={isOpened} onBGClicked={handleSidebarBGClick} />
    </>
  );
}
