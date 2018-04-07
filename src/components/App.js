import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom'
import ListOfProducts from "./listOfProducts/ListOfProducts";
import StorageOfProducts from "./storageOfProducts/StorageOfProducts";
import HomeView from './homeView/HomeView';
import Auth from './RegisterForm/Auth';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Auth>
                    <Route path="/" component={HomeView}/>
                    <Route exact path="/" component={ListOfProducts}/>
                    <Route exact path="/storage" component={StorageOfProducts}/>
                </Auth>
            </React.Fragment>
        )}
}
export default withRouter(App)

