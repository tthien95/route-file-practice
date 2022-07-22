import React from 'react';
import EventList from '../../components/event/EventList';
import EventSearch from '../../components/event/EventSearch';
import { getAllEvents } from '../../dummy-data';

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <>
      <EventSearch />
      <EventList item={events} />
    </>
  );
}
