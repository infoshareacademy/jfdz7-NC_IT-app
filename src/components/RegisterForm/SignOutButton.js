import React from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../state/auth';
import {Button, Grid, Icon} from 'semantic-ui-react';

class SignOutButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                        <Button color='black' animated onClick={() => this.props.signOut()}>
                            <Button.Content visible>
                                Wyloguj
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name='external'/>
                            </Button.Content>
                        </Button>
            </React.Fragment>
        )
    }
}

export default connect(null, {signOut})(SignOutButton);