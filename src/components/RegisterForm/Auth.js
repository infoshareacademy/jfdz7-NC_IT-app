import React from 'react';
import {connect} from 'react-redux';

class Auth extends React.Component {

    render() {
        return this.props.user === null ? <SignUpForm/> : this.props.children
    }
}

export default connect ({
    user: state.auth.user
})(Auth);