import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <Aside/>
        {this.props.children}
        <Footer/>
        {/* will render `Repo.js` when at /repos/:userName/:repoName */}
      </div>
    )
  }
})

var Header = React.createClass({
  render() {
    return (
      <div className="header">
        <header>
          <h1 className="title">FRM</h1>
          <ul className="nav">
            <li><Link to="/:userName/dashboard">Dashboard</Link></li>
            <li><Link to="/">Edit Profile</Link></li>
            <li><Link to="/">Log Out</Link></li>
          </ul>
        </header>
      </div>
    )
  }
})

var Aside = React.createClass({
  render() {
    return (
      <div className="aside">
        <aside className="col-lg-2 col-md-2 col-xs-12">
          <p><Link to="/:userName/eventful">Find Events</Link></p>
        </aside>
      </div>
    )
  }
})

var Footer = React.createClass({
  render() {
    return (
      <div className="footer">
        <footer>
          <small>&copy 2016 GarofaloSandsLyndon corp</small>
        </footer>
      </div>
    )
  }
})
