import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className='Login'>
        <Login />
      </div>
    )
  }
})

var Heading = React.createClass({
  render: function() {
    return (
      <div className="heading">
        <header>
          <h1>FRM</h1>
          <h2>Your personal Friends and Family Relationship Manager</h2>
        </header>
      </div>
    );
  }
});

var Login = React.createClass({
  render: function() {
    return (
      <div id='splash'>
        <Heading />
        <div id="login">
          <form className="loginForm">
            <input type='text' placeholder='User Name'/>
            <input type='text' placeholder='Password'/>
            <Link to="/1/dashboard">Log In</Link>
          </form>
        </div>
      </div>
    );
  }
});
