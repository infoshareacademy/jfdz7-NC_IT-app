import React from 'react';
import {connect} from 'react-redux';
import {SignUpForm} from './SignUpForm';
import {SignInForm} from './SignInForm';

class Auth extends React.Component {

    render() {
        return this.props.user === null ? (
            <div>
                <SignUpForm/>
                <SignInForm/>
            </div>
        ) : (this.props.children)
    }
}

export default connect ({
    user: state.auth.user
})(Auth);