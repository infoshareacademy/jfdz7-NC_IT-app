import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../state/auth'

class SignUpForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    error: null
  }

  handleSubmit = event => {
    event.preventDefault()

    const { email, password, error, ...userData } = this.state

    this.props
      .signUp(email, password, userData)
      .catch(error => this.setState({ error }))
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  renderInput(fieldName, type = 'text') {
    return (
      <input
        name={fieldName}
        value={this.state[fieldName]}
        type={type}
        onChange={this.handleChange}
      />
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign up form</h1>
        {this.state.error && <p>{this.state.error.message}</p>}
        <div>first name: {this.renderInput('firstName')}</div>
        <div>last name: {this.renderInput('lastName')}</div>
        <div>email: {this.renderInput('email')}</div>
        <div>password: {this.renderInput('password', 'password')}</div>
        <button>Sign up</button>
      </form>
    )
  }
}

export default connect(null, { signUp })(SignUpForm)
