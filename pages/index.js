import React from 'react';
import EventList from '../components/event/EventList';
import { getFeaturedEvents } from '../dummy-data';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return <EventList items={featuredEvents} />;
}
