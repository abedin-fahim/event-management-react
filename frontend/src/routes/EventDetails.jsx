import { Fragment } from "react"
import { useParams } from "react-router-dom";

const EventDetailsPage = () => {
    const params = useParams();

    return (
        <Fragment>
            <h1>Here are the event details </h1>
            <p><i>{params.eventId}</i></p>
        </Fragment>
    );
};

export default EventDetailsPage;