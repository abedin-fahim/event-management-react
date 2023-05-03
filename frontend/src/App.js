// Challenge / Exercise
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './routes/Home';
import EventsPage from './routes/Events';
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
              loader: async () => {
                const response = await fetch('http://localhost:8080/events');

                if (!response.ok) {
                  // ...
                } else {
                  const resData = await response.json();
                  return resData.events;
                }
              }
            },
            { path: ':eventId', element: <EventDetailPage /> },
            { path: 'new', element: <NewEventPage /> },
            { path: ':eventId/edit', element: <EditEventPage /> },
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