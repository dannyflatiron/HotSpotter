import React from 'react';
import { NavLink } from 'react-router-dom'


const Home = () => (
  <div className="home" style={{zIndex:10}}>
    <span className="log" style={{zIndex:10}}>
      <NavLink className="log" activeStyle={{ color: 'red' }} style={{zIndex:10}, {textDecoration: 'none'}} to="/signup">Sign Up</NavLink> | <NavLink className="log" activeStyle={{ color: 'red' }} style={{zIndex:10}, {textDecoration: 'none'}} to="/login">Log In</NavLink>
    </span>
  </div>

);

export default Home;