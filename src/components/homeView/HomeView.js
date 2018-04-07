import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom'
import { Grid, Button, Icon, Label, Image } from 'semantic-ui-react'
import SignOutButton from '../RegisterForm/SignOutButton';
import logo from './logo.png'

class HomeView extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid centered verticalAlign='middle' className={'header'}>
                    <Grid.Row>
                        <Grid.Column width={2}>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Image src={logo} fluid/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <SignOutButton/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        )}
}
export default HomeView

