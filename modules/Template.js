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
            <li className="navlink"><Link to="/:userName/dashboard">Dashboard</Link></li>
            <li className="navlink"><Link to="/">Edit Profile</Link></li>
            <li className="navlink"><Link to="/">Log Out</Link></li>
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
          <img className="profilePic" src="../images/ryan.jpg"/>
          <Search />
          <ConnectionTypes />
          <p><Link to="/100/eventful">Find Events</Link></p>
          <p><Link to="/100/lists/new">Add a List</Link></p>
          <p><Link to="/100/connection/new">Add a Connection</Link></p>
        </aside>
      </div>
    )
  }
})

var Search = React.createClass({
  render(){
    return (
      <div className="KendraSearchContainer">
        <input className="kendraSearch" type="text" placeholder="find connection"/>
        <button className="kendraSearchButton">Go</button>
      </div>
    )
  }
})

var ConnectionTypes = React.createClass({
  render(){
    return (
      <div className="search-by-type">
        <p>Search by Relationship Type :</p>
        <select>
          <option>Friends</option>
          <option>Family</option>
          <option>Business</option>
        </select>
      </div>
    )
  }
})

var Footer = React.createClass({
  render() {
    return (
      <div className="footer">
        <footer>
          <small dangerouslySetInnerHTML={{__html: '&copy SLG corp'}}></small>
        </footer>
      </div>
    )
  }
})
