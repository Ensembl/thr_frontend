import {userConstants} from '../_constants';
import {userService} from '../_services';
import {alertActions} from './';
import {history} from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
    changePassword,
};

function login(username, password, from) {
    return dispatch => {
        dispatch(request({username}));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push(from);
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) {
        return {type: userConstants.LOGIN_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.LOGIN_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.LOGIN_FAILURE, error}
    }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('{"success": "Registration successful"}'));
                }
                ,
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
    };

    function request(user) {
        return {type: userConstants.REGISTER_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.REGISTER_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.REGISTER_FAILURE, error}
    }
}

function changePassword(old_password, new_password1, new_password2) {
    return dispatch => {
        dispatch(request({old_password}));

        userService.changePassword(old_password, new_password1, new_password2)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('{"success": "Password Updated successfully. Please login again."}'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) {
        return {type: userConstants.CHANGE_PASSWORD_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.CHANGE_PASSWORD_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.CHANGE_PASSWORD_FAILURE, error}
    }
}
