import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    AUTH_INIT_ERROR,
    AUTH_INIT_SUCCESS,
    PASSWORD_RESET_EMAIL_REQUEST,
    PASSWORD_RESET_EMAIL_SUCCESS,
    RESET_REQUEST,
    RESET_SUCCESS,
    AUTH_FAILURE
} from '../actions/user';

const token = localStorage.getItem('token');
export default function auth(state = {
    isFetching: false,
    isAuthenticated: !!token,
    errorMessage: '',
    currentUser: null,
    loadingInit: true
}, action) {
    switch (action.type) {
        case RESET_REQUEST:
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
            });
        case PASSWORD_RESET_EMAIL_REQUEST:
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: '',
            });
        case AUTH_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.payload,
            });
        case RESET_SUCCESS:
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.payload,
            });
        case PASSWORD_RESET_EMAIL_SUCCESS:
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: false,
            });
        case AUTH_INIT_SUCCESS:
            return Object.assign({}, state, {
                currentUser: action.payload.currentUser || null,
                loadingInit: false
            });
        case AUTH_INIT_ERROR:
            return Object.assign({}, state, {
                currentUser: null,
                loadingInit: false,
            });
        default:
            return state;
    }
}
