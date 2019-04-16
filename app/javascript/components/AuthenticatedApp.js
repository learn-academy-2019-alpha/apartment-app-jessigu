import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>Authenticated</div>
        <a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a>
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
