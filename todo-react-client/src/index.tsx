import React from 'react'
import { hydrate, render } from 'react-dom'
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

const ConnectedRoot = () => (
  <Provider store={store}>
    <Root />
  </Provider>
)

const rootElement = document.getElementById('root')

if (rootElement && rootElement.hasChildNodes()) {
  hydrate(<ConnectedRoot />, rootElement)
} else {
  render(<ConnectedRoot />, rootElement)
}

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
