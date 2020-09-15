import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => (
  <div className="home" style={{zIndex:10}}>
    <span className="log" style={{zIndex:10}}>
      <Link className="log" style={{zIndex:10}} to="/signup">Sign Up</Link> or <Link className="log" style={{zIndex:10}} to="/login">Log In</Link>
    </span>
  </div>

);

export default Home;