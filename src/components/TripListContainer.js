import React from "react";

const ListContainer = props => {
    return(
        <div>
            <div>
                <p>Airport: {props.trip.airport}</p>
                <p>Airline: {props.trip.airline}</p>
                <p>Departure: {props.trip.departure_time}</p>
                <p>Kids: {props.trip.kids}</p>
            </div>
        </div>
    );
};

export default ListContainer;

// Roberts component.