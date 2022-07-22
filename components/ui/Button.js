import React from 'react';
import Link from 'next/link';

import { btn } from './button.module.css';

export default function Button({ link, children }) {
  return (
    <Link href={link}>
      <a className={btn}>{children}</a>
    </Link>
  );
}
