import { Fragment } from 'react';
import { json, useParams, useLoaderData } from 'react-router-dom';

import EventItem from '../components/EventItem';

const EventDetailsPage = () => {
  const data = useLoaderData();
  const selectedEvent = data.event;

  return (
    <Fragment>
      <EventItem event={selectedEvent} />
      {/* <h1>Here are the event details </h1>
            <p><i>{params.eventId}</i></p> */}
    </Fragment>
  );
};

export default EventDetailsPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  console.log(id);

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
