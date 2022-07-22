import React from 'react';
import Link from 'next/link';

import { btn } from './button.module.css';

export default function Button({ link, children, onCLick }) {
  if (link) {
    return (
      <Link href={link}>
        <a className={btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={btn} onClick={onCLick}>
      {children}
    </button>
  );
}
