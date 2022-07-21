import React from 'react';
import EventItem from './EventItem';

export default function EventList({ items }) {
  return (
    <ul>
      {items.map((event) => (
        <EventItem {...event} key={event.id} />
      ))}
    </ul>
  );
}
