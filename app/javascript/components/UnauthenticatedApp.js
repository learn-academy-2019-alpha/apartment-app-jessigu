import React from "react"
import PropTypes from "prop-types"
class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>Unauthenticated</div>
        <a href="/users/sign_in">LogIn</a>
      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
