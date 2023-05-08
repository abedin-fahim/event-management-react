import { Fragment } from 'react';
import { json, redirect, useRouteLoaderData } from 'react-router-dom';

import EventItem from '../components/EventItem';

const EventDetailsPage = () => {
  const data = useRouteLoaderData('event-detail');
  const selectedEvent = data.event;

  return (
    <Fragment>
      <EventItem event={selectedEvent} />
    </Fragment>
  );
};

export default EventDetailsPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    return json(
      { message: 'Could not fetch the selected event' },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method,
  });

  if (!response.ok) {
    return json({ message: 'Could not delete event.' }, { status: 500 });
  }

  return redirect('/events');
}
// Find error in my code
