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
  getInitialState: function() {
    return {
      userName: '',
      password: ''
    }
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  logIn: function(e) {
    e.preventDefault();
    var formData = {
      userName: ReactDOM.findDOMNode(this.ref.userName).value,
      password: ReactDOM.findDOMNode(this.ref.password).value
    }
    var settings = {
      url: "https://obscure-basin-16378.herokuapp.com/auth/login",
      method: 'post',
      dataType: 'json',
      data: formData,
      cache: false,
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    }
    return $.ajax(settings);
  },
  render: function(){
    return (
      <form onSubmit={this.logIn}
      className="loginForm">
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
          <Link  to="/signup">Sign Up</Link>
        </button>
        <button className="ryanButton">
          <Link  to="/1/dashboard">Log In</Link>
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
