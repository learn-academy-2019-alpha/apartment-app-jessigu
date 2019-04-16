import React from "react"
import PropTypes from "prop-types"

class Apartments extends React.Component {
  render () {
    const{ apartments } = this.props
    return (
      <React.Fragment>
        <ul>
          {apartments.map((apartment)=>{
            return(
              <li key={apartment.id}>
                {apartment.street_one}<br />
                {apartment.street_two}<br />
                {apartment.city}, {apartment.state} {apartment.postal}
              </li>
            )
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Apartments
