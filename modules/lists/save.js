import React from 'react'
import GetAllLists from '../ajax-helpers/lists/GetAllUserLists'
import GetOneList from '../ajax-helpers/lists/GetOneList'

GetOneList();

export default React.createClass({
  render() {
    return (
      <div className='list'>
        <Testing />
      </div>
    )
  }
})

var Testing = React.createClass({
  // getInitialState: function() {
  //   return {data: []};
  // },
  // componentDidMount: function() {
  //   var settings = {
  //     url: "http://localhost:3000/api/list/100",
  //     method: 'get',
  //     dataType: 'json',
  //     cache: false,
  //     success: function(data) {
  //       console.log(data);
  //       this.setState({data: data});
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error(this.props.url, status, err.toString());
  //     }.bind(this)
  //   }
  //   return $.ajax(settings);
  // },
  render: function() {
    return (
      <div className="test">
        <h1>Testing</h1>
        //THIS WONT WORK YET
        //<Section data={this.state.data.listItems} />
        <Section />
      </div>
    );
  }
});

//THIS ALSO DOESNT WORK YET
var Section = React.createClass({
  render: function() {
    return (
      <div className="testingTesting">
        //<h1>{this.state.data}</h1>
        <h1>hello kendra and ryan</h1>
      </div>
    );
  }
});
