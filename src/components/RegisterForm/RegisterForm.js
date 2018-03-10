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

    render() {
        return (
            <React.Fragment>
                <h2>Register Form</h2>
                <form>
                    Imię
                    <input/>
                    Nazwisko
                    <input/>
                    E-mail
                    <input/>
                    Password
                    <input/>
                </form>
            </React.Fragment>
        );
    }
}

export default RegisterForm;