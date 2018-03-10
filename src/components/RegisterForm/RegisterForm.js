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

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    };

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

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.signUpUser(this.state);
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

    renderEmailInput = fieldEmail => {
        return (
            <input
                type={'email'}
                name={fieldEmail}
                value={this.state[fieldEmail]}
                onChange={this.handleChange}
            />
        );
    };

    renderPasswordInput = fieldPassword => {
        return (
            <input
                type={'password'}
                name={fieldPassword}
                value={this.state[fieldPassword]}
                onChange={this.handleChange}
            />
        );
    };

    render() {
        return (
            <React.Fragment>
                <h2>Registration Form</h2>
                <form onClick={this.handleSubmit}>
                    Imię:
                    {this.renderTextInput('userName')}<br/>
                    Nazwisko:
                    {this.renderTextInput('userLastName')}<br/>
                    E-mail:
                    {this.renderEmailInput('userEmail')}<br/>
                    Hasło:
                    {this.renderPasswordInput('userPassword')}<br/>
                    Pwtórz hasło:
                    {this.renderPasswordInput('userPassword')}<br/>
                    <button disabled={false}>
                        Sign Up
                    </button>
                    <p>hasło musi posiadać min 8 znaków....</p>
                </form>

                <ul>
                    {this.state.users.map((item, id) => <li>
                        {item.name}<br/>
                        {item.lastName}<br/>
                        {item.email}<br/>
                    </li>)}
                </ul>

            </React.Fragment>
        );
    }
}

export default RegisterForm;