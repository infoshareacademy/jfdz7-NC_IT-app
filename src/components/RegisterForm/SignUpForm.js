import React from 'react';
import {connect} from 'react-redux';
import {signUp} from '../../state/auth';

class SignUpForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        error: null
    };

    handleSubmit = event => {
        event.preventDefault();

        const {email, password, error, ...userData} = this.state;

        // this.props.signUp(this.state.email, this.state.password);

        this.props
            .signUp(email, password, userData)
            .catch(error => this.setState({error}))
    };

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        });
    };

    renderInput(fieldName, type = 'text') {
        return (
        <input
            name={fieldName}
            value={this.state[fieldName]}
            type={type}
            onChange={this.handleChange}
        />);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Formularz Rejestracji</h2>
                {this.state.error && <p>{this.state.error.message}</p>}
                <div>Imię: {this.renderInput('firstName')}</div>
                <div>Nazwisko: {this.renderInput('lastName')}</div>
                <div>E - mail: {this.renderInput('email')}</div>
                <div>Password: {this.renderInput('password', 'password')}</div>
                <button>Wyślij</button>
            </form>
        );
    }
}

export default connect(null, {signUp})(SignUpForm);