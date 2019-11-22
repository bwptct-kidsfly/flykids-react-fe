import React from "react";
import Styled from "styled-components";

const Div = Styled.div`
    border: 10px solid #932F6D;
    width: 500px;
    margin: 0 auto 10px;
    font-size: 1.3rem;
    background-color:  #DCCCFF;
    border-radius: 5px;
`;

const P = Styled.p`
    color: #420039;

`;


const ListContainer = props => {
    return(
        <div>
            <Div>
                <div><P>Name: {props.users.name}</P></div>
                <div><P>Email: {props.users.email}</P></div>
                <div><P>Phone: {props.users.phone}</P></div>
            </Div>
        </div>
    );
};

export default ListContainer;

// Roberts component.