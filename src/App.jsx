import React from 'react'
import { Link, Route } from 'react-router-dom'

import AppStyles from './styles/components/App.scss'

import Candidates from './pages/Candidates.jsx'
import Vote from './pages/Vote.jsx'
import Winners from './pages/Winners.jsx'

class App extends React.Component {
  render() {
    return (
      <div id={AppStyles['app']}>
        <header id={AppStyles['header']}>
          <h1>Simple Contest</h1>
          <nav>
            <ul>
              <li>
                <Link to="/candidates">Candidates</Link>
              </li>
              <li>
                <Link to="/vote">Vote</Link>
              </li>
              <li>
                <Link to="/winners">Winners</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div id={AppStyles['content']}>
          <Route path="/candidates" exact component={Candidates} />
          <Route path="/vote" exact component={Vote} />
          <Route path="/winners" exact component={Winners} />
        </div>
        <footer id={AppStyles['footer']}>
          <p>Simple Contest</p>
          <nav>
            <ul>
              <li>
                By <a href="https://mfcl.io">Marc-François Cochaux-Laberge</a>
              </li>
              <li>
                <a href="https://github.com/mfcochauxlaberge/simple-contest-client">
                  Source code
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    )
  }
}

export default App
