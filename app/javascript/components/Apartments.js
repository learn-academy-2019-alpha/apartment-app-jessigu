import React from "react"
import PropTypes from "prop-types"

class Apartments extends React.Component {
  render () {
    const{ apartments } = this.props
    return(
      <React.Fragment>
        <table style={{border: "1px solid black"}}>
          <tbody>
            <tr>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zipcode</th>
              <th>Contact</th>
            </tr>
            {apartments.map((apartment, index)=>{
              return (
                <tr key={index}>
                  <td>{apartment.street_one}<br />
                      {apartment.street_two}</td>
                  <td>{apartment.city}</td>
                  <td>{apartment.state}</td>
                  <td>{apartment.postal}</td>
                  <td>Manager Information {apartment.user_id}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Apartments
