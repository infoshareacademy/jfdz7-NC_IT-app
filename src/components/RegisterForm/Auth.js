import React from 'react';
import {connect} from 'react-redux';
import {Header, Grid, Icon} from 'semantic-ui-react';

import SignInForm from './SignInForm';

class Auth extends React.Component {

    render() {
        return this.props.user === null ? (
            <React.Fragment>
                <Grid container>
                    <Grid.Column>
                        <SignInForm/>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        ) : (this.props.children)
    }
}

export default connect(state => ({
    user: state.auth.user
}))(Auth);