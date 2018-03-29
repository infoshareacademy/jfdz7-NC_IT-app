import React from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../state/auth';
import {Button, Grid, Icon} from 'semantic-ui-react';

class SignOutButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Grid centered>
                    <Grid.Column textAlign='right'>
                        <Button color='teal' animated onClick={() => this.props.signOut()}>
                            <Button.Content visible>
                                Wyloguj
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name='external'/>
                            </Button.Content>
                        </Button>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        )
    }
}

export default connect(null, {signOut})(SignOutButton);