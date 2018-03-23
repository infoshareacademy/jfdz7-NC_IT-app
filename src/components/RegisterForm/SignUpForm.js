import React from 'react';
import {connect} from 'react-redux';
import {signUp} from '../../state/auth';
import {Form, Header, Button, Icon} from 'semantic-ui-react';

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
            <Form onSubmit={this.handleSubmit}>
                <Header as='h2' textAlign='center' icon><Icon name='users' circular/>Formularz Rejestracji</Header>
                {this.state.error && <p>{this.state.error.message}</p>}
                <Form.Field>
                    <label>Imię: </label>
                    {this.renderInput('firstName')}
                </Form.Field>
                <Form.Field>
                    <label>Nazwisko: </label>
                    {this.renderInput('lastName')}
                </Form.Field>
                <Form.Field>
                    <label>E - mail: </label>
                    {this.renderInput('email')}
                </Form.Field>
                <Form.Field>
                    <label>Password: </label>
                    {this.renderInput('password', 'password')}
                </Form.Field>
                <Button secondary>Wyślij</Button>
            </Form>
        );
    }
}

export default connect(null, {signUp})(SignUpForm);