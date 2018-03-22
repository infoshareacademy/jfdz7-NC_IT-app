import React from 'react';
import {connect} from 'react-redux';

class Auth extends React.Component {

    render() {
        return this.props.user === null ? <p>Zaloguj się</p> : this.props.children
    }
}

export default connect ({
    user: state.auth.user
})(Auth);