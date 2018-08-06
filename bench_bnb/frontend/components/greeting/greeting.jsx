import React from 'react';
import {Link} from 'react-router-dom'


const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => {
    return (<nav>
      <Link to="/login">Login</Link>
      &nbsp;
      <Link to="/signup">Sign Up!</Link>
    </nav>)
  };

  const personalGreeting = () => {
    return (<div>
      <h1>Hi, {currentUser.username}</h1>
      <button onClick={logout}>Log Out</button>
    </div>);
  };

  debugger;
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;