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

  constructor(props) {
   super(props);
   this.login_stuff = {};

 }

  login: function(e){
    e.preventDefault();
    $.ajax({
      url:"https://obscure-basin-16378.herokuapp.com/auth/login",
      method:'post'
    })
      console.log('you have reached the login function');
      return('hi')
  },
  render: function(){
    return (
      <form className="loginForm" onSubmit={this.login}>
        <input
          className="ryanInput"
          type='text'
          ref="userName"
          placeholder='User Name'
        />
        <input
          className="ryanInput"
          type='text'
          ref="password"
          placeholder='Password'
        />
        <button className="ryanButton ryanSignupButton">
          <Link to="/signup">Sign Up</Link>
        </button>
        <button className="ryanButton" type="submit">

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
