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

// Common pattern of storing the data is in the file we are using the loader in.
// We import the function in router file where we declare the loader
export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // ...
  } else {
    const resData = await response.json();
    return resData.events;
  }
}