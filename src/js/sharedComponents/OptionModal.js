import React from 'react';
import Modal from 'react-modal'; 

class OptionModal extends React.Component {
  addGoal = () => {
    this.props.addGoal()
  }
  
  componentWillMount() {
    Modal.setAppElement('body');
  }

  render() {
    return (
      // Modal requires two props to work (isOpen and contentLabel)
      <Modal
        // true means show the pop-up, false means hide the pop-up
        isOpen={!!this.props.selectedAddGoal}
        // this will show up for people who have accessability mode activated
        contentLabel="Add Goal"
        onRequestClose={this.props.hideAddGoalPopUp}
      >
        <h3>Add Goal</h3>
        <button onClick={this.addGoal}>Add Goal</button>
      </Modal>
    )
  }
}

export { OptionModal }