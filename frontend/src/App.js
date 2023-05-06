// Challenge / Exercise
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './routes/Home';
import EventsPage, { loader as eventLoader } from './routes/Events';
import { loader as selectedEventLoader } from './routes/EventDetails'
import EventDetailPage from './routes/EventDetails';
import NewEventPage from './routes/NewEvent';
import EditEventPage from './routes/EditEvent';

import RootLayout from './routes/Root';
import ErrorPage from './routes/Error';
import EventsRootLayout from './routes/EventsRoot';

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
                { index: true, element: <EventDetailPage /> },
                { path: 'edit', element: <EditEventPage /> },
              ]
            },
            { path: 'new', element: <NewEventPage /> },
          ]
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
