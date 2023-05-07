import { Fragment } from 'react';
import EventForm from '../components/EventForm';

const NewEventsPage = () => {
  return (
    <Fragment>
      <EventForm method='POST' />
    </Fragment>
  );
};

export default NewEventsPage;
