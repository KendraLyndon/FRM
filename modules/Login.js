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
          <h1 className="ryanSplashLogo">FRM</h1>
          <h2 className="ryanSlogan">Your Personal Family and Friends Relationship Manager</h2>
      </div>
    );
  }
});

var Login = React.createClass({
  logIn: function(){
    console.log('hello');
  },
  render: function() {
    return (
      <div id='splash'>
        <div className="ryanSplashBody">
          <div className="ryanCenter">
            <Heading />
              <div className="kendraLogin" id="login">
                <form className="loginForm">
                  <input className="ryanInput" type='text' placeholder='User Name'/>
                  <input  className="ryanInput" type='text' placeholder='Password'/>
                  <button className="ryanButton ryanSignupButton" onClick={this.logIn}>
                    <Link  to="/signUp">Sign Up</Link>
                  </button>
                  <button className="ryanButton" onClick={this.logIn}>
                    <Link  to="/1/dashboard">Log In</Link>
                  </button>
                </form>
                <img className="stickFam" src="../images/stickFam.png"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
