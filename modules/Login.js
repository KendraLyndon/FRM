import React from 'react'
import { ReactDOM } from 'react-dom'
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
        <h1 className="ryanSplashLogo">FRM</h1>
        <h2 className="ryanSlogan">Your Personal Family and Friends Relationship Manager</h2>
      </div>
    );
  }
});

var UserForm = React.createClass({
  login: function(e){
    e.preventDefault();
    $.ajax({
      url:"https://obscure-basin-16378.herokuapp.com/auth/login",
      method:'post',
      data:{
        userName:"kendralyndon@gmail.com",
        password:"password"
      }
    })
      console.log('you have reached the login function');
      return('hi')
  },
  render: function(){
    return (
      <form className="loginForm">
        <input
          className="ryanInput"
          type='text'
          name="email"
          placeholder='Email Address'
        />
        <input
          className="ryanInput"
          type='text'
          name="password"
          placeholder='Password'
        />
        <button className="ryanButton ryanSignupButton">
          <Link to="/signup">Sign Up</Link>
        </button>
        <button className="ryanButton" type="submit">
          <Link to="/1/dashboard">Log In</Link>
        </button>
      </form>
    )
  }
});

var Login = React.createClass({
  render: function() {
    return (
      <div id='splash'>
        <div className="ryanSplashBody">
          <div className="ryanCenter">
            <Heading />
              <div className="kendraLogin" id="login">
                <UserForm />
                <img className="stickFam" src="../images/stickFam.png"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
