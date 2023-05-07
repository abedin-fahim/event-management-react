import { Fragment } from 'react';
import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

const EditEventPage = () => {
  const data = useRouteLoaderData('event-detail');
  const event = data.event;

  return (
    <Fragment>
      <EventForm
        method='PATCH'
        event={event}
      />
    </Fragment>
  );
};

export default EditEventPage;
