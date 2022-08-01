import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import EventList from '../../components/event/EventList';
import EventSearch from '../../components/event/EventSearch';
import { getAllEvents } from '../../helpers/api-util';

export default function EventsPage({ events }) {
  const router = useRouter();

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of greate events that allow you to evolve..."
        />
      </Head>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return { props: { events } };
}
