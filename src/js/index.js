import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css';
import '../css/styles.scss';
import { store } from './store/store'
import { dummyActions } from './dummyActions' // TO DO: Delete later
import { ConnectedAppRouter } from './routers/AppRouter'

const jsx = (
  <Provider store={store}>
    <ConnectedAppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))