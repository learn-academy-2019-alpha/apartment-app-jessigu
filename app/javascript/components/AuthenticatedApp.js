import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import ApartmentsPage from './pages/ApartmentsPage'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Link to="/apartments">See All Apartments</Link><br />
          <a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a>
          <Switch>
            <Route path="/apartments" component={ApartmentsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AuthenticatedApp
