import React from 'react';
import Head from 'next/head';

import EventList from '../components/event/EventList';
import { getFeaturedEvents } from '../helpers/api-util';
import NewsletterRegistration from '../components/input/NewsletterRegistration';

export default function HomePage({ featuredEvents }) {
  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of greate events that allow you to evolve..."
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents
    },
    revalidate: 1800
  };
}
