import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className='ShowConnection'>
        <h1>Showing Connection {this.props.params.id}</h1>
      </div>
    )
  }
})
