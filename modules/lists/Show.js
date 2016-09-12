import React from 'react'

var Testing = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    var settings = {
      url: "https://obscure-basin-16378.herokuapp.com/api/connections/1001",
      method: 'get',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({
          firstName: data.connection.first_name,
          lastName: data.connection.last_name,
          email:data.connection.email,
          phone:data.connection.phone

        });

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    }
    return $.ajax(settings);
  },
  render: function() {
    return (
      <div className="test">
        <h1>Testing</h1>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.email}</p>
        <p>{this.state.phone}</p>
      </div>
    );
  }
});

export default React.createClass({
  render() {
    return (
      <div className='list'>
      <Testing />
      </div>
    )
  }
})
