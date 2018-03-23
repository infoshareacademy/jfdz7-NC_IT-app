import React from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../state/auth';

class SignInForm extends React.Component {
    state ={
        email: '',
        password: ''
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props
            .signIn(this.state.email, this.state.password)
            .catch(error => this.setState({error}))
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    };

    renderInput(fieldName, type='text') {
        return (
            <input
                name={fieldName}
                value={this.state[fieldName]}
                type={type}
                onChange={this.handleChange}
            />
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Formularz Logowania</h2>
                {this.state.error && <p>{this.state.error.message}</p>}
                <div>E - mail: {this.renderInput('email')}</div>
                <div>Password: {this.renderInput('password', 'password')}</div>
                <button>Zaloguj</button>
            </form>
        );
    }
}

export default connect(null, {signIn})(SignInForm);