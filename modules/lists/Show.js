import React from 'react'
import GetAllLists from '../ajax-helpers/lists/GetAllUserLists'
import GetOneList from '../ajax-helpers/lists/GetOneList'

GetAllLists();

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
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    GetOneList();
  },
  render: function() {
    return (
      <div className="test">
        <h1>Testing</h1>
        //THIS WONT WORK YET
        // <Section data={this.state.data.listItems} />
      </div>
    );
  }
});

//THIS ALSO DOESNT WORK YET
// var Section = React.createClass({
//   render: function() {
//     return (
//       <div className="testingTesting">
//         <h1>{this.}</h1>
//       </div>
//     );
//   }
// });
