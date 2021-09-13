import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import {Alert, Button } from 'reactstrap';
import { sendPasswordResetEmail } from '../../../actions/auth';
import s from './Forgot.module.scss';


class Forgot extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {

        super(props);

        this.state = {
            email: '',
        };

        this.changeEmail = this.changeEmail.bind(this);
        this.doSendResetEmail = this.doSendResetEmail.bind(this);
    }

    changeEmail(event) {
        this.setState({email: event.target.value});
    }

    doSendResetEmail(e) {
        e.preventDefault();
        this.props.dispatch(sendPasswordResetEmail(this.state.email));
    }

    render() {
        return (
            <div className={s.wrapper}>
            <div className={s.containerBody}>
                    <h5 className={s.header}>
                        <i className="la la-circle text-grey"/>
                        One React
                        <i className="la la-circle text-warning"/>
                    </h5>
                        <div className={s.container}>
                            <h3 className="mt-0">Forgot password?</h3>
                            <p>
                                Please fill your email below
                            </p>
                            <form onSubmit={this.doSendResetEmail}>
                                {
                                    this.props.errorMessage && (
                                        <Alert className="alert-sm" color="danger">
                                            {this.props.errorMessage}
                                        </Alert>
                                    )
                                }
                                <div className="form-group">
                                    <input className="form-control no-border" value={this.state.email}
                                           onChange={this.changeEmail} type="email" required name="email"
                                           placeholder="Email" />
                                </div>
                                <Button type="submit" color="warning" className="auth-btn mb-3" size="sm">
                                    {this.props.isFetching ? 'Loading...' : 'Send'}
                                </Button>
                            </form>
                            <p className="widget-auth-info">
                                Need to Login?
                            </p>
                            <Link className="d-block text-center" to="login">Enter the account</Link>
                        </div>
                    <footer className={s.footerId}>
                        {new Date().getFullYear()} &copy; One React - React Admin Dashboard Template. By <a rel="noopener noreferrer" target="_blank" href="https://flatlogic.com">Flatlogic</a>
                    </footer>
        </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.auth.isFetching,
        errorMessage: state.auth.errorMessage
    };
}

export default withRouter(connect(mapStateToProps)(Forgot));

