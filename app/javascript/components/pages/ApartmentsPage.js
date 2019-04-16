import React from "react"
import PropTypes from "prop-types"

import { allApartments } from '../data/apartments'

//Component
import Apartments from '../Apartments'

class ApartmentsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
    this.getApartments()
  }

  getApartments = () => {
    allApartments()
    .then(apartments => {
      this.setState({ apartments })
    })
    .catch(error => {
      console.log("error", error);
    })
  }
  render () {
    let { apartments } = this.state
    return (
      <React.Fragment>
        <h1>I'm an apartment. Hear me roar</h1>
        <Apartments apartments={apartments} />
      </React.Fragment>
    );
  }
}

export default ApartmentsPage
