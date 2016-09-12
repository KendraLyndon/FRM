import React from 'react'
import { Button } from 'react-bootstrap';

var data = [
  {
    id:1,
    first_name:"Laurie",
    last_name:"Garofalo",
    relationType:"family",
    relation:"Mom",
    contactFrequency:"1 per week",
    lastContact:"9/10/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:2,
    city:"Glens Falls"
  },
  {
    id:2,
    first_name:"Greg",
    last_name:"Garofalo",
    relationType:"family",
    relation:"dad",
    contactFrequency:"1 per week",
    lastContact:"9/10/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:3,
    city:"Glens Falls"
  },
  {
    id:3,
    first_name:"Harold",
    last_name:"Garofalo",
    relationType:"family",
    relation:"Grandfather",
    contactFrequency:"1 per week",
    lastContact:"9/10/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:3,
    city:"Glens Falls"
  },
  {
    id:2,
    first_name:"Alexis",
    last_name:"Garofalo",
    relationType:"family",
    relation:"Sister",
    contactFrequency:"1 per week",
    lastContact:"9/10/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:3,
    city:"Glens Falls"
  },
  {
    id:2,
    first_name:"Chelsea",
    last_name:"Garofalo",
    relationType:"family",
    relation:"Sister",
    contactFrequency:"1 per week",
    lastContact:"9/10/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:3,
    city:"Glens Falls"
  },
  {
    id:2,
    first_name:"Kendra",
    last_name:"Lyndon",
    relationType:"friend",
    relation:"Best friends",
    contactFrequency:"1 per week",
    lastContact:"9/10/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:3,
    city:"Glens Falls"
  },
  {
    id:3,
    first_name:"Max",
    last_name:"Sands",
    relationType:"friend",
    relation:"raquetball partners/ enemies",
    contactFrequency:"1 per week",
    lastContact:"9/10/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:4,
    city:"Glens Falls"
  },
  {
    id:3,
    first_name:"Matt",
    last_name:"Colluci",
    relationType:"friend",
    relation:"Tennis partners/ enemies",
    contactFrequency:"1 per week",
    lastContact:"9/10/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:4,
    city:"Glens Falls"
  },
  {
    id:3,
    first_name:"Gordon",
    last_name:"Gekko",
    relationType:"business",
    relation:"stock broker",
    contactFrequency:"1 per week",
    lastContact:"9/10/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:4,
    city:"Glens Falls"
  },
  {
    id:3,
    first_name:"Jordon",
    last_name:"bellfort",
    relationType:"business",
    relation:"Stock Broker",
    contactFrequency:"1 per week",
    lastContact:"9/10/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:4,
    city:"Glens Falls"
  },
]

export default React.createClass({
  render() {
    return (
      <div className="dashboard col-lg-10 col-md-10 col-xs-12">
        <Dashboard/>
      </div>
    )
  }
})

var Dashboard = React.createClass({
  render() {
    return (
      <div>
        <Connections data={data}/>
      </div>
    )
  }
})

var Connections = React.createClass({
  render(){
    var arr = this.props.data.map(function(connection, i){
      return (
        <div className="connection panel panel-custom" key={i}>
          <div className="panel-heading">
            <h3 className="panel-title">{connection.first_name + " " +connection.last_name}</h3>
          </div>
          <div className="panel-body">
            <p>Relation: {connection.relation}</p>
            <p>Contact Frequency: {connection.contactFrequency}</p>
            <p>Last Contact: {connection.lastContact}</p>
            <p>Shared List: {connection.list}</p>

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
