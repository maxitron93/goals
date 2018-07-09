import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { ConnectedTimeline } from '../pages/timelinePage/Timeline'
import { ConnectedToDo } from '../pages/toDoPage/ToDo'
import { NotFoundPage } from '../pages/notFoundPage/NotFoundPage'
import { OptionModal } from '../sharedComponents/OptionModal'

class AppRouter extends React.Component {
  state = {
    currentPage: window.location.pathname,
    selectedAddGoal: undefined
  }

  // Set currentPage state when a link is clicked
  setCurrentPage = () => {
    this.setState(() => {
      return {
        currentPage: window.location.pathname
      }
    })
  }

  // Set selectedAddGoal to true and display the Add Goal pop-up when Add Goal button is clicked
  showAddGoalPopUp = () => {
    this.setState(() => {
      return {
        selectedAddGoal: true
      }
    })
  }

  // Set selectedAddGoal to false and hide the Add Goal pop-up when Add Goal button is clicked
  hideAddGoalPopUp = () => {
    this.setState(() => {
      return {
        selectedAddGoal: false
      }
    })
  }

  // Add goal
  addGoal = () => {
    this.hideAddGoalPopUp()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Navigation</h1>
          
          {/* Area for Timeline link and its sub buttons */}
          <div>
            <p><Link to="/" onClick={this.setCurrentPage} >Timeline</Link></p>
            {this.state.currentPage === "/" && <button onClick={this.showAddGoalPopUp} >Add goal</button>}
          </div>
          
          {/* Area for ToDo link and its sub buttons */}
          <div>
            <p><Link to="/todo" onClick={this.setCurrentPage} >To Do</Link></p>
            {this.state.currentPage === "/todo" && <button onClick={this.showAddGoalPopUp} >Add goal</button>}
          </div>

          <OptionModal 
            selectedAddGoal={this.state.selectedAddGoal} 
            hideAddGoalPopUp={this.hideAddGoalPopUp}
            addGoal={this.addGoal}
          />

          <hr/>
  
          <Switch>
            <Route exact path="/" component={ConnectedTimeline} />
            <Route exact path="/todo" component={ConnectedToDo} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
    
}

// Enable AppRouter to dispatch actions
const ConnectedAppRouter = connect()(AppRouter)

export { ConnectedAppRouter }