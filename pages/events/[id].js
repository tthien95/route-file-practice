import React from 'react';
import { getEventById, getAllEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/ErrorAlert';

export default function EventDetailPage({ event }) {
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  const { title, description, location, date, image } = event;

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps({ params }) {
  const eventId = params.id;

  const event = await getEventById(eventId);

  return { props: { event } };
}

export async function getStaticPaths() {
  const events = await getAllEvents();

  const paths = events.map((event) => ({ params: { id: event.id } }));

  return { paths, fallback: false };
}
