import React from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../state/auth';
import {Form, Button, Header, Grid, Segment} from 'semantic-ui-react';

class SignInForm extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props
            .signIn(this.state.email, this.state.password)
            .catch(error => this.setState({error}))
    };

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' textAlign='center'>Formularz Logowania</Header>
                    {this.state.error && <p>{this.state.error.message}</p>}
                    <Form onSubmit={this.handleSubmit} size='large'>
                        <Segment stacked>
                        <Form.Field>
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                name='email'
                                type='email'
                                placeholder='E-mail addres'
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                name='password'
                                type='password'
                                placeholder='Password'
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Button secondary fluid size='large'>Zaloguj</Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(null, {signIn})(SignInForm);