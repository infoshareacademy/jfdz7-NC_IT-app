import React from 'react';

import SignOutButton from './RegisterForm/SignOutButton';

import Auth from '../components/RegisterForm/Auth';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Auth/>
                <SignOutButton/>
            </React.Fragment>
        );
    }
}

export default App;
