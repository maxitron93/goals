import React from 'react';
import { connect } from 'react-redux'

const Timeline = (props) => {
  return (
    <div>
      {props.goals.map((goal, index) => {
        return (
          <div key={index}>
            <h3>{goal.title}</h3>
            <p>{goal.id}</p>
            <p>{goal.achieveBy}</p>
            <p>{goal.description}</p>
            <p>{goal.textColor}</p>
            <p>{goal.boxColor}</p>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals
  }
}
const ConnectedTimeline = connect(mapStateToProps)(Timeline);

export { ConnectedTimeline }