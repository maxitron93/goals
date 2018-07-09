import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { goalsReducer } from '../reducers/goals'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    goals: goalsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
)

export { store }