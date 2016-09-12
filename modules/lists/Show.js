import React from 'react'

var Testing = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    var settings = {
      url: "https://obscure-basin-16378.herokuapp.com/api/list/501",
      method: 'get',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({data: data.list.name});
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
        <p>{this.state.data}</p>
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
