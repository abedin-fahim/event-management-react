import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './routes/Home';
import EventsPage, { loader as eventLoader } from './routes/Events';
import { loader as selectedEventLoader, action as deleteEventAction } from './routes/EventDetails';
import EventDetailPage from './routes/EventDetails';
import NewEventPage from './routes/NewEvent';
import EditEventPage from './routes/EditEvent';

import RootLayout from './routes/Root';
import ErrorPage from './routes/Error';
import EventsRootLayout from './routes/EventsRoot';
import { action as manipulateEventAction } from './components/EventForm'
import NewsletterPage, { action as newsletterAction } from './routes/Newsletter';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'events',
          element: <EventsRootLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventLoader,
            },
            {
              path: ':eventId',
              id: 'event-detail',
              loader: selectedEventLoader,
              children: [
                { index: true, element: <EventDetailPage />, action: deleteEventAction },
                { path: 'edit', element: <EditEventPage />, action: manipulateEventAction },
              ]
            },
            { path: 'new', element: <NewEventPage />, action: manipulateEventAction },
          ]
        },
        {
          path: 'newsletter',
          element: <NewsletterPage />,
          action: newsletterAction,
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
