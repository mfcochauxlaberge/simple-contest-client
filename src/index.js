import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

import App from './App.jsx'

ReactDOM.render(<App />, document.getElementById('app'))

hot.module.accept()
