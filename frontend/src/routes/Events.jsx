import { Suspense } from 'react';
import { json, useLoaderData, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';
// Find error in this code

const EventsPage = () => {
  // We can use the useLoaderData inside of the EventsList component directly.
  // We can't use it in the higher level route.
  // const data = useLoaderData();
  const { events } = useLoaderData();

  console.log(events);

  // One way of handling errors
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  // const events = data.events;

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

export default EventsPage;

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json(
      { message: 'Could not fetch events' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

// Common pattern of storing the data is in the file we are using the loader in.
// We import the function in router file where we declare the loader
export function loader() {
  return defer({
    events: loadEvents(),
  });
  // // We can't react hooks here
  // const response = await fetch('http://localhost:8080/events');
  // if (!response.ok) {
  //   // return { isError: true, message: 'Could not fetch events' };
  //   // throw new Response(JSON.stringify({ message: 'Could not fetch events' }), {
  //   //   status: 500,
  //   // });
  //   // With the help of the json func provided by the react router, we can create and convert objects into json automatically
  //   return json(
  //     { message: 'Could not fetch events' },
  //     {
  //       status: 500,
  //     }
  //   );
  // } else {
  //   // Bc react-router supports handling responses
  //   // const resData = await response.json();
  //   // return resData.events;
  //   return response;
  // }
}
