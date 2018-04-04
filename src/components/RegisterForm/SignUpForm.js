import React from 'react';
import {connect} from 'react-redux';
import {signUp} from '../../state/auth';
import {Form, Header, Button, Segment, Grid, Image, Message} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

import './SignUpForm.css';

class SignUpForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        error: null
    };

    handleSubmit = event => {
        event.preventDefault();

        const {email, password, error, ...userData} = this.state;

        this.props
            .signUp(email, password, userData)
            .catch(error => this.setState({error}))
    };

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
                <Grid textAlign='center' style={{height: '145%'}} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 470}}>
                        <Header as='h2' textAlign='center'>
                            <Image src='./logo.svg'/>
                            Formularz Rejestracji
                        </Header>
                        {this.state.error && <p>{this.state.error.message}</p>}
                        <Form onSubmit={this.handleSubmit}>
                            <Segment stacked>
                                <Form.Field>
                                    <Form.Input
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        name='firstName'
                                        type='text'
                                        placeholder='Name'
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        name='lastName'
                                        type='text'
                                        placeholder='Last name'
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        fluid
                                        icon='mail'
                                        iconPosition='left'
                                        name='email'
                                        type='email'
                                        placeholder='E-mail address'
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
                                <Button id='button' fluid size='large'>Wyślij</Button>
                                <Message size='small'>
                                    Chcę wrócić do
                                    <NavLink to='/'> formularza logowania.</NavLink>
                                </Message>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
        );
    }
}

export default connect(null, {signUp})(SignUpForm);