import React from 'react';
import EventList from '../../components/event/EventList';
import { getAllEvents } from '../../dummy-data';

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList item={events} />
    </div>
  );
}
