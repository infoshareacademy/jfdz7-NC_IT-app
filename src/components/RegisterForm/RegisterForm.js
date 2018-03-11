import React from 'react';

class RegisterForm extends React.Component {

    state = {
        form: {
            name: '',
            lastName: '',
            email: '',
            password: '',
            passwordRepeat: ''
        },
        users: [
            {
                id: Date.now().toString(32),
                name: 'Jan',
                lastName: 'Kowalski',
                email: 'jan.kowalski@email.com',
                password: 'jakies haslo'
            }
        ]
    };

    handleChange = ({target: {name, value}}) => {
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }

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
        // event.stopPropagation();
        this.signUpUser(this.state);
    };

    passwordVerification = () => {
        const pass = this.state.form.password;
        const passRepeat = this.state.form.passwordRepeat;
        const passLength = 8;
        return (pass === passRepeat && pass.length === passLength) ?
            document.getElementsByTagName('button').setAttribute('disable', 'false') : alert('Hasło powinno posiadać minimum 8 znaków.');
    };

    emailRepeatVerification = () => {
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
        console.log(this.state.form.password);
        return (
            <React.Fragment>
                <h2>Registration Form</h2>
                <form onSubmit={this.handleSubmit}>
                    Imię:
                    {this.renderTextInput('userName')}<br/>
                    Nazwisko:
                    {this.renderTextInput('userLastName')}<br/>
                    E-mail:
                    {this.renderEmailInput('userEmail')}<br/>
                    Hasło:
                    {this.renderPasswordInput('userPassword')}<br/>
                    Powtórz hasło:
                    {this.renderPasswordInput('userPassword')}<br/>
                    <button disabled={true}>
                        Sign Up
                    </button>
                    <p>hasło musi posiadać min 8 znaków....</p>
                </form>

                <ul>
                    {this.state.users.map((item, id) => <li key={id}>
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