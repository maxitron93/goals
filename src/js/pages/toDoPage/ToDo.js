import React from 'react';
import { connect } from 'react-redux'

const ToDo = (props) => {
  return (
    <div>
      <h2>ToDo</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

const ConnectedToDo = connect(mapStateToProps)(ToDo);

export { ConnectedToDo }