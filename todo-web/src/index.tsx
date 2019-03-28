import React from 'react'
import ReactDOM from 'react-dom'

import { Root } from 'src/containers'

import * as serviceWorker from './serviceWorker'
import './index.css'

ReactDOM.render(<Root />, document.getElementById('root'))

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
