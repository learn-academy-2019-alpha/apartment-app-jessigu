import React from "react"
import PropTypes from "prop-types"

import ApartmentsPage from './pages/ApartmentsPage'

class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <div>
        < ApartmentsPage /><br />
        <a href="/users/sign_in">LogIn</a>
      </div>
    );
  }
}

export default UnauthenticatedApp
