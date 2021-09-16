import {userConstants} from '../_constants';
import {userService} from '../_services';
import {alertActions} from './';
import {history} from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
    changePassword,
    forgotPassword,
    validateResetToken,
    resetPassword
};

// TODO: Refactor me please?!

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

function forgotPassword(email) {
    return dispatch => {
        dispatch(request({email}));

        userService.forgotPassword(email)
            .then(
                response => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success(`{"success": "Please check your email, reset link is send to ${email.email}"}`));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(email) {
        return {type: userConstants.RESET_PASSWORD_REQUEST, email}
    }

    function success(email) {
        return {type: userConstants.RESET_PASSWORD_SUCCESS, email}
    }

    function failure(error) {
        return {type: userConstants.RESET_PASSWORD_FAILURE, error}
    }
}

function validateResetToken(uidb64, token) {
    return dispatch => {
        dispatch(request({uidb64, token}));

        console.log('IN userActions.validateResetToken')

        userService.validateResetToken(uidb64, token)
            .then(
                response => {
                    console.log('userService.validateResetToken response --> ', response)
                    dispatch(success());
                    dispatch(alertActions.success(`{"success": "Token is valid, please enter your new password"}`));
                },
                error => {
                    console.log('userService.validateResetToken error --> ', error)
                    dispatch(failure(error));
                    history.push('/forgot_password');
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request({uidb64, token}) {
        return {type: userConstants.VALIDATE_RESET_PASSWORD_REQUEST, uidb64, token}
    }

    function success() {
        return {type: userConstants.VALIDATE_RESET_PASSWORD_SUCCESS}
    }

    function failure(error) {
        return {type: userConstants.VALIDATE_RESET_PASSWORD_FAILURE, error}
    }
}

function resetPassword(new_password, new_password_confirm, uidb64, token) {
    return dispatch => {
        dispatch(request({new_password, new_password_confirm, uidb64, token}));

        userService.resetPassword(new_password, new_password_confirm, uidb64, token)
            .then(
                response => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success(`{"success": "Your password has been reset successfully!"}`));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(email) {
        return {type: userConstants.COMPLETE_RESET_PASSWORD_REQUEST, email}
    }

    function success(email) {
        return {type: userConstants.COMPLETE_RESET_PASSWORD_SUCCESS, email}
    }

    function failure(error) {
        return {type: userConstants.COMPLETE_RESET_PASSWORD_FAILURE, error}
    }
}
