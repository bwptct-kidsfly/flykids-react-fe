import React from "react";

const ListContainer = props => {
    return(
        <div>
            <div>
                <div><h4>Name: {props.users.name}</h4></div>
                <div><p>Email: {props.users.email}</p></div>
                <div><p>Phone: {props.users.phone}</p></div>
            </div>
        </div>
    );
};

export default ListContainer;

// Roberts component.