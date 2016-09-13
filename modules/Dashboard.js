import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

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
    city:"Glens Falls",
    email:"lauriegarofalo@gmail.com"
  },
  {
    id:2,
    first_name:"Greg",
    last_name:"Garofalo",
    relationType:"family",
    relation:"dad",
    contactFrequency:"1 per month",
    lastContact:"8/29/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:3,
    city:"Glens Falls",
    email:"greggarofalo@gmail.com"

  },
  {
    id:3,
    first_name:"Harold",
    last_name:"Garofalo",
    relationType:"family",
    relation:"Grandfather",
    contactFrequency:"2 per month",
    lastContact:"8/14/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:3,
    city:"Glens Falls",
    email:"haroldgarofalo@gmail.com"

  },
  {
    id:2,
    first_name:"Alexis",
    last_name:"Garofalo",
    relationType:"family",
    relation:"Sister",
    contactFrequency:"1 per day",
    lastContact:"9/12/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:3,
    city:"Glens Falls",
    email:"alexisgarofalo@gmail.com"

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
    city:"Glens Falls",
    email:"chelseagarofalo@gmail.com"

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
    city:"Glens Falls",
    email:"kendralyndon@gmail.com"

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
    city:"Glens Falls",
    email:"maxsands@gmail.com"

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
    city:"Glens Falls",
    email:"mattcolluci@gmail.com"

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
    city:"Glens Falls",
    email:"gordon@gmail.com"

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
    city:"Glens Falls",
    email:"jordon@gmail.com"

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
      var makeString = connection.id.toString();
      return (
        <div className="connection panel panel-custom" key={i}>
          <div className="panel-heading">
            <h3 className="panel-title"><Link to='/100/connection/501'>{connection.first_name + " " +connection.last_name}</Link></h3>
          </div>
          <div className="panel-body">
            <p>Relation: {connection.relation}</p>
            <p>Contact Frequency: {connection.contactFrequency}</p>
            <p>Last Contact: {connection.lastContact}</p>
            <p><Link className="kendraLink" to="/100/lists/100">Shared List: {connection.list}</Link></p>
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
