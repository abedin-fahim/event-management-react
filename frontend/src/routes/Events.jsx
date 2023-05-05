import { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  // We can use the useLoaderData inside of the EventsList component directly.
  // We can't use it in the higher level route.
  const events = useLoaderData();

  return (
    <Fragment>
      <EventsList events={events} />
    </Fragment>
  );
}

export default EventsPage;
