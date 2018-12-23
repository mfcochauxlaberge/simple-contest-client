import React from 'react'
import { Link, Route } from 'react-router-dom'

import AppStyles from './styles/pages/App.scss'

import Candidates from './pages/Candidates.jsx'
import Vote from './pages/Vote.jsx'
import Winners from './pages/Winners.jsx'
import Login from './pages/Login.jsx'
import { SessionContext } from './services/session'

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
              <SessionContext.Consumer>
                {context => {
                  if (context.loggedIn) {
                    return (
                      <li>
                        <Link to="/vote">Vote</Link>
                      </li>
                    )
                  }
                }}
              </SessionContext.Consumer>
              <li>
                <Link to="/winners">Winners</Link>
              </li>
              <SessionContext.Consumer>
                {context => {
                  if (context.loggedIn) {
                    return (
                      <li>
                        <Link to="#" onClick={context.forgetCode}>
                          Log out
                        </Link>
                      </li>
                    )
                  } else {
                    return (
                      <li>
                        <Link to="/login">Log in</Link>
                      </li>
                    )
                  }
                }}
              </SessionContext.Consumer>
            </ul>
          </nav>
        </header>
        <div id={AppStyles['content']}>
          <Route path="/candidates" exact component={Candidates} />
          <Route path="/vote" exact component={Vote} />
          <Route path="/winners" exact component={Winners} />
          <Route path="/login" exact component={Login} />
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
