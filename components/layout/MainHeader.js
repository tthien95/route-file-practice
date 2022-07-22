import React from 'react';
import Link from 'next/link';

import { header, logo, navigation } from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={header}>
      <div className={logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
