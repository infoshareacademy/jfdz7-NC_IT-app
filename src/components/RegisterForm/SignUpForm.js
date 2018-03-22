import React from 'react';
import {connect} from 'react-redux';
import {signUp} from '../../state/auth';

class SignUpForm extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = event => {
        event.preventDefault();

        // this.props.signUp(this.state.email, this.state.password);

        this.props
            .signUp(this.state.email, this.state.password)
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
                <div>email: {this.renderInput('email')}</div>
                <div>password: {this.renderInput('password')}</div>
                <button>Wyślij</button>
            </form>
        );
    }
}

export default connect(null, {signUp})(SignUpForm);