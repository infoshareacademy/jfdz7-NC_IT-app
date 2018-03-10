import React from 'react';

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    id: Date.now().toString(32),
                    name: 'Jan',
                    lastName: 'Kowalski',
                    email: 'jan.kowalski@email.com',
                    password: ''
                }
            ]
        };
    }

    signUpUser = ({userName, userLastName, userEmail, userPassword}) => {
        this.setState({
            users: this.state.users.concat({
                    id: Date.now().toString(32),
                    name: userName,
                    lastName: userLastName,
                    email: userEmail,
                    password: userPassword
                }
            )
        })
    };

    passwordVerification = () => {

    };

    renderTextInput = fieldSignUp => {
        return (
            <input
                type={'text'}
                name={fieldSignUp}
                value={this.state[fieldSignUp]}
                onChange={this.handleChange}
            />
        );
    };

    renderPasswordInput = fieldPassword => {
        return (
            <input
                type={'password'}
                name={'fieldPassword'}
                value={this.state[fieldPassword]}
                onChange={this.handleChange}
                />
        );
    };

    render() {
        return (
            <React.Fragment>
                <h2>Register Form</h2>
                <form>
                    Imię
                    {this.renderTextInput('userName')}<br/>
                    Nazwisko
                    {this.renderTextInput('userLastName')}<br/>
                    E-mail
                    {this.renderTextInput('userEmail')}<br/>
                    Hasło
                    {this.renderPasswordInput('userPassword')}<br/>
                    Pwtórz hasło
                    {this.renderPasswordInput('userPassword2')}<br/>
                    <button>
                        Sign Up
                    </button>
                </form>
            </React.Fragment>
        );
    }
}

export default RegisterForm;