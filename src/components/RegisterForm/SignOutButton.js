import React from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../state/auth';

class SignOutButton extends React.Component {
    render() {
        return <button onClick={() => this.props.signOut()}>
            Wyloguj
        </button>
    }
}

export default connect(null, {signOut})(SignOutButton);