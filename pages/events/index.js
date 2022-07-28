import React from 'react';
import EventList from '../../components/event/EventList';
import EventSearch from '../../components/event/EventSearch';
import { getAllEvents } from '../../helpers/api-util';

export default function EventsPage({ events }) {
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

export async function getStaticProps() {
  const events = await getAllEvents();

  return { props: { events } };
}
