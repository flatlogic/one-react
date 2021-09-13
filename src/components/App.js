import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ConnectedRouter } from "connected-react-router";
import { getHistory } from "../index";
import { AdminRoute, UserRoute } from "./RouteComponents";

/* eslint-disable */
import ErrorPage from '../pages/error';
/* eslint-enable */

import '../styles/theme.scss';
import LayoutComponent from '../components/Layout';
import DocumentationLayoutComponent from '../documentation/DocumentationLayout';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import Forgot from "../pages/auth/forgot";
import Reset from "../pages/auth/reset";
//import { logoutUser } from '../actions/auth';

// const PrivateRoute = ({dispatch, component, ...rest }) => {
//     if (!Login.isAuthenticated(localStorage.getItem('token'))) {
//         dispatch(logoutUser());
//         return (<Redirect to="/login"/>)
//     } else {
//         return ( // eslint-disable-line
//             <Route {...rest} render={props => (React.createElement(component, props))}/>
//         );
//     }
// };

const CloseButton = ({closeToast}) => <i onClick={closeToast} className="la la-close notifications-close"/>

class App extends React.PureComponent {
  
  render() {
      {console.log(this.props)}
    return (
        <div>
            <ToastContainer
                autoClose={5000}
                hideProgressBar
                closeButton={<CloseButton/>}
            />
            <ConnectedRouter history={getHistory()}>
                <HashRouter>
                    <Switch>
                        <Route path="/" exact render={() => <Redirect to="/app/dashboard"/>}/>
                        <Route path="/app" exact render={() => <Redirect to="/app/dashboard"/>}/>
                        <UserRoute path="/app" dispatch={this.props.dispatch} component={LayoutComponent}/>
                        <AdminRoute path="/admin" currentUser={this.props.currentUser} dispatch={this.props.dispatch}
                                    component={LayoutComponent}/>
                        <Route path="/documentation" exact
                               render={() => <Redirect to="/documentation/getting-started/overview"/>}/>
                        <Route path="/documentation" component={DocumentationLayoutComponent}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/forgot" exact component={Forgot}/>
                        <Route path="/password-reset" exact component={Reset}/>
                        <Route path="/error" exact component={ErrorPage}/>
                        <Route component={ErrorPage}/>
                    </Switch>
                </HashRouter>
            </ConnectedRouter>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(App);
