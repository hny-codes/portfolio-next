'use client';

import { ArrowUpFromLine } from 'lucide-react';
import { useState, useEffect } from 'react';

// REFERENCE: https://stackoverflow.com/a/71101044
const checkScroll = () => {
  // Return true if theres a scroll bar, false otherwise
  return document.body.clientHeight < document.body.scrollHeight ? true : false;
};

export default function TopAnchor() {
  const [scroll, setScroll] = useState<boolean>();

  useEffect(() => {
    setScroll(checkScroll());
  }, []);

  return (
    <a
      href='#'
      className={`${
        scroll ? 'block' : 'sm:hidden'
      } flex gap-2 hover:transition hover:text-[var(--clr-secondary-01)]`}
    >
      <ArrowUpFromLine /> Top
    </a>
  );
}
