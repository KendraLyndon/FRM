var Heading = React.createClass({
  render: function() {
    return (
      <div className="heading">
        <header>
          <h1>FRM</h1>
          <h2>Your personal Friends and Family Relationship Manager</h2>
        </header>
      </div>
    );
  }
});

var Login = React.createClass({
  render: function() {
    return (
      <div id='splash'>
        <Heading />
        <div id='login'>
          <input type='text' placeholder='User Name'/>
          <input type='text' placeholder='Password'/>
          <input type='submit' Log In/>
        </div>
      </div>
    );
  }
})
ReactDOM.render(
  <Login />,
  document.getElementById('content')
);
// To get started with this tutorial running your own code, simply remove
// the script tag loading scripts/example.js and start writing code here.
