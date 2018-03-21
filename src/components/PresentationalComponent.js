import React, { Component } from 'react'
import PropTypes from 'prop-types'

const PresentationalComponent = props => <h1>Hello {props.username}</h1>

PresentationalComponent.propTypes = {
  username: PropTypes.string.isRequired
}

export default PresentationalComponent
