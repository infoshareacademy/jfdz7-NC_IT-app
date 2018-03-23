import React from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../state/auth';
import {Button} from 'semantic-ui-react';

class SignOutButton extends React.Component {
    render() {
        return <Button secondary onClick={() => this.props.signOut()}>
            Wyloguj
        </Button>
    }
}

export default connect(null, {signOut})(SignOutButton);