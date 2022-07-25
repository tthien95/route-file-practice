import React from 'react';
import { useRouter } from 'next/router';
import EventList from '../../components/event/EventList';
import EventSearch from '../../components/event/EventSearch';
import { getAllEvents } from '../../dummy-data';

export default function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </>
  );
}
