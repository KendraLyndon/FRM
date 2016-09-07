import React from 'react'
import { Button } from 'react-bootstrap';

var data = [
  {
    id:1,
    first_name:"laurie",
    last_name:"garofalo",
    relation:"mom",
    user_id:1,
    is_user:true,
    connection_id:2,
    city:"Glens Falls"
  },
  {
    id:2,
    first_name:"greg",
    last_name:"garofalo",
    relation:"dad",
    user_id:1,
    is_user:true,
    connection_id:3,
    city:"Glens Falls"
  },
  {
    id:3,
    first_name:"Chelsea",
    last_name:"garofalo",
    relation:"sister",
    user_id:1,
    is_user:true,
    connection_id:4,
    city:"Glens Falls"
  }
]

export default React.createClass({
  render() {
    return (
      <div className="dashboard col-lg-10 col-md-10 col-xs-12">
        <h2>{this.props.params.userName}</h2>
        <Dashboard/>
      </div>
    )
  }
})

var Dashboard = React.createClass({
  render() {
    return (
      <div>
        <h1>Dashboard</h1>

        <Connections data={data}/>
      </div>
    )
  }
})

var Connections = React.createClass({
  render(){
    var arr = this.props.data.map(function(connection, i){
      return (
        <div className="connection panel panel-default" key={i}>
          <div className="panel-heading">
            <h3 className="panel-title">{connection.first_name + " " +connection.last_name}</h3>
          </div>
          <div className="panel-body">
            {connection.relation}
          </div>
        </div>
      );
    });
    return (
      <div className="connections">
        {arr}
      </div>
    )
  }
})
