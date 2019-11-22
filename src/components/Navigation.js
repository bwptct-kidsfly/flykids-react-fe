import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';



const Nav = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
text-align: center;
align-items: center;
background-color: #932F6D;
`;


const Navigation = () => {
  return (
    <div>
      <Nav>
        <h1>KidsFly!</h1>
        <div>
          <Link to='/users' className='atags'>
            Users
          </Link>
        </div>
        <div>
          <Link to='/trips' className='atags'>
            Trips
          </Link>
        </div>
        <div>
          <Link to='/login' className='atags'>
            Log In
          </Link>
        </div>
      </Nav>
    </div>
  )
}
// MVP MET WITH ROUTING
export default Navigation
