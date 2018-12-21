import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

import './styles/main.scss'

import App from './App.jsx'

ReactDOM.render(<App />, document.getElementById('app'))

hot.module.accept()
