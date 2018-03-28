import React from 'react';
import {connect} from 'react-redux';
import {Grid} from 'semantic-ui-react';
import {Route} from 'react-router-dom';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

class Auth extends React.Component {

    render() {
        return this.props.user === null ? (
            <React.Fragment>
                    <Grid container>
                        <Grid.Column>
                            <Route exact path='/' component={SignInForm}/>
                            <Route path='/sign' component={SignUpForm}/>
                        </Grid.Column>
                    </Grid>
            </React.Fragment>
        ) : (this.props.children)
    }
}

export default connect(state => ({
    user: state.auth.user
}))(Auth);