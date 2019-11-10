import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

import { Root } from 'containers'
import reducer, { initialState } from 'store/reducer'

import * as serviceWorker from './serviceWorker'
import './index.css'

const composeEnhancers = composeWithDevTools({})

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
