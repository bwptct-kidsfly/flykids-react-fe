import React, { useState, useEffect } from "react";
import TripContainer from "./TripContainer";
import axios from "axios";

export default function TripList() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        // api().get("/trips")
        axios.get("https://kids-fly-backend.herokuapp.com/trips")
            .then(res => {
                console.log(res);
                setTrips(res.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    return (
        <div>
            {trips.map(trip => {
                return(
                    <TripContainer 
                        key={trip.id}
                        trip={trip}
                    />
                )
            })}
        </div>
    )
}
//MVP MET USING USESTATE AND USEEFFECT
//MVP MET Student implemented GET requests using either Axios or Fetch to display 3rd party data on a deployed page. Route management properly installed and used to show top level pages as well as nested views where necessary.
//ROUTE MANAGEMENT PROPERLY USED LINE: 39 APP.JS