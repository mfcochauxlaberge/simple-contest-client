import React, { Component } from 'react'

const SessionContext = React.createContext()

class SessionProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
      claims: {},
    }
  }

  render() {
    return (
      <SessionContext.Provider
        value={{
          loggedIn: this.state.loggedIn,
          claims: this.state.claims,

          verifyCode: ({ code }) => {
            this.setState(() => {
              return {
                loggedIn: true,
                claims: { code },
              }
            })
          },

          forgetCode: () => {
            this.setState(() => {
              return {
                loggedIn: false,
                claims: {},
              }
            })
          },
        }}
      >
        {this.props.children}
      </SessionContext.Provider>
    )
  }
}

export { SessionContext, SessionProvider }
