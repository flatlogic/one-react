import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    AUTH_INIT_ERROR,
    AUTH_INIT_SUCCESS,
    PASSWORD_RESET_EMAIL_REQUEST,
    PASSWORD_RESET_EMAIL_SUCCESS,
    RESET_REQUEST,
    RESET_SUCCESS,
    AUTH_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from '../actions/auth';

const token = localStorage.getItem('token');
export default function auth(state = {
    isFetching: false,
    isAuthenticated: !!token,
    errorMessage: '',
    currentUser: null,
    loadingInit: true
}, {type, payload}) {
    switch (type) {
        case LOGIN_REQUEST:
        case RESET_REQUEST:
        case PASSWORD_RESET_EMAIL_REQUEST:
        case REGISTER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                errorMessage: '',
                //isAuthenticated: false,
            });
        case LOGIN_SUCCESS:
        case LOGOUT_SUCCESS:
        case RESET_SUCCESS:
        case PASSWORD_RESET_EMAIL_SUCCESS:
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: '',
            });
        case AUTH_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: payload,
            });
        case AUTH_INIT_SUCCESS:
            return Object.assign({}, state, {
                currentUser: payload.currentUser || null,
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
