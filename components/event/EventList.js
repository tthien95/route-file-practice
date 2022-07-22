import React from 'react';
import EventItem from './EventItem';
import { list } from './event-list.module.css';

export default function EventList({ items }) {
  return (
    <ul className={list}>
      {items.map((event) => (
        <EventItem {...event} key={event.id} />
      ))}
    </ul>
  );
}
