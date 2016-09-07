import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h2>{this.props.params.userName}</h2>
      </div>
    )
  }
})
