import { Fragment } from 'react';

import { useRouteError } from 'react-router-dom';

import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong';

  if (error.status === 500) {
    let data = JSON.parse(error.data);
    message = data.message;
  }

  if (error.status === 404) {
    title = 'Page not found';
    message = 'Sorry for the inconvenience!';
  }
  return (
    <Fragment>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </Fragment>
  );
};

export default ErrorPage;
