import { Fragment } from "react"
import { Link } from "react-router-dom";

const EVENTS = [
    {
        id: 'e1',
        title: 'An Events 1'
    },
    {
        id: 'e2',
        title: 'An Events 2'
    },
    {
        id: 'e3',
        title: 'An Events 3'
    },
    {
        id: 'e4',
        title: 'An Events 4'
    },
]

const EventsPage = () => {
    // const param = useParams();

    return (
        <Fragment>
            <h1>Welcome to the Events Page</h1>
            <ul>
                {EVENTS.map((event) => (
                    <li key={event.id}>
                        {/* <Link to={`/events/${event.id}`}>{event.title}</Link> */}
                        {/* Relative path */}
                        <Link to={event.id}>{event.title}</Link>
                    </li>
                ))}
            </ul>

        </Fragment>
    );
};

export default EventsPage;