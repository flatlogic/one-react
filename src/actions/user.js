import axios from 'axios';
import config from '../config';
import jwt from "jsonwebtoken";
import { toast } from 'react-toastify';
//import { push } from 'connected-react-router';
import {mockUser} from "./mock";

export const AUTH_FAILURE = 'AUTH_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const RESET_REQUEST = 'RESET_REQUEST';
export const RESET_SUCCESS = 'RESET_SUCCESS';
export const AUTH_INIT_ERROR = 'AUTH_INIT_ERROR';
export const AUTH_INIT_SUCCESS = 'AUTH_INIT_SUCCESS';
export const PASSWORD_RESET_EMAIL_REQUEST = 'PASSWORD_RESET_EMAIL_REQUEST';
export const PASSWORD_RESET_EMAIL_SUCCESS = 'PASSWORD_RESET_EMAIL_SUCCESS';


async function findMe() {
    if (config.isBackend) {
        const response = await axios.get('/auth/me');
        return response.data;
    } else {
        return mockUser;
    }
}

export function authError(payload) {
    return {
        type: AUTH_FAILURE,
        payload
    };
}

function requestLogin() {
    return {
        type: LOGIN_REQUEST,
    };
}

export function receiveLogin() {
    return {
        type: LOGIN_SUCCESS
    };
}

function loginError(payload) {
    return {
        type: LOGIN_FAILURE,
        payload,
    };
}

export function doInit() {
    return async (dispatch) => {
        let currentUser = null;
        if (!config.isBackend) {
            currentUser = mockUser;
            dispatch({
                type: AUTH_INIT_SUCCESS,
                payload: {
                    currentUser,
                },
            });
        } else {
            try {
                let token = localStorage.getItem('token');
                if (token) {
                    currentUser = await findMe()
                }
                dispatch({
                    type: AUTH_INIT_SUCCESS,
                    payload: {
                        currentUser
                    },
                });
            } catch (error) {
                dispatch({
                    type: AUTH_INIT_ERROR,
                    payload: error,
                })
            }
        }
    }
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
    };
}

export function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
    };
}

// Logs the user out
export function logoutUser() {
    return (dispatch) => {
        dispatch(requestLogout());
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        axios.defaults.headers.common['Authorization'] = "";
        dispatch(receiveLogout());
    };
}

export function receiveToken(token) {
    return (dispatch) => {
        let user;

        // We check if app runs with backend mode
        if (config.isBackend) {
          user = jwt.decode(token);
        } else {
          user = {
            email: config.auth.email
          }
        }

        delete user.id;
        localStorage.setItem('token', token);
        console.log(token)
        localStorage.setItem('user', JSON.stringify(user));
        axios.defaults.headers.common['Authorization'] = "Bearer " + token;
        dispatch(receiveLogin());
    }
}

export function loginUser(creds) {
    return (dispatch) => {
        // We check if app runs with backend mode
        if (!config.isBackend) {
          dispatch(receiveToken('token'));
          dispatch(doInit());
        } else {
          dispatch(requestLogin());
          if (creds.social) {
              window.location.href = config.baseURLApi + "/auth/signin/" + creds.social + '?app=' + config.redirectUrl;
            //window.location.href = config.baseURLApi + "/user/signin/" + creds.social + (process.env.NODE_ENV === "production" ? "?app=sing-app-react" : "");
          } else if (creds.email.length > 0 && creds.password.length > 0) {
            axios.post("/auth/signin/local", creds).then(res => {
              const token = res.data;
              dispatch(receiveToken(token));
              dispatch(doInit());
            }).catch(err => {
              dispatch(loginError(err.response.data));
            })

          } else {
            dispatch(loginError('Something was wrong. Try again'));
          }
        }
    };
}

export function resetPassword(token, password) {
    return (dispatch) => {
        if (!config.isBackend) {

        } else {
            dispatch({
                type: RESET_REQUEST
            });
            axios.put("/auth/password-reset", {token, password}).then(() => {
                dispatch({
                    type: RESET_SUCCESS,
                });
                toast.success("Password has been updated");
            }).catch(err => {
                dispatch(authError(err.response.data))
            })
        }
    }
}

export function sendPasswordResetEmail(email) {
    return (dispatch) => {
        if (!config.isBackend) {
            console.log(email);
        } else {
            dispatch({
                type: PASSWORD_RESET_EMAIL_REQUEST,
            });
            axios.post("/auth/send-password-reset-email", {email}).then(() => {
                dispatch({ type: PASSWORD_RESET_EMAIL_SUCCESS });
                toast.success("Email with resetting instructions has been sent");
            }).catch(dispatch(loginError('Something was wrong. Try again')))
        }
    }
}
