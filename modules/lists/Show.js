import React from 'react'
import GetAllLists from '../ajax-helpers/lists/GetAllUserLists'


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
  //   $.ajax({
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
  //   })
  // },
  render: function() {
    return (
      <div className="test">
        <h1>Testing</h1>
        //THIS WONT WORK BECAUSE THERE IS NO COMMENTLIST
        // <Section data={this.state.data.listItems} />
      </div>
    );
  }
});

// var Section = React.createClass({
//   render: function() {
//     return (
//       <div className="testingTesting">
//         <h1>{this.}</h1>
//       </div>
//     );
//   }
// });
