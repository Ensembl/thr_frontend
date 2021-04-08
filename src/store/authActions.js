/**
 * See the NOTICE file distributed with this work for additional information
 * regarding copyright ownership.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import axios from 'axios';
import * as actionTypes from './authActionTypes';
import * as settings from '../settings';

const SESSION_DURATION = settings.SESSION_DURATION

// ########################################################
// ########################################################
// Contains Auth Action Functions. These perform two kinds of things:
// 1) Return Action Objects
// a) Simply Return an Action Object
// b) Perform some action and then return an Action Objet
// 2) Return A Dispatch(Action) combination
// a)Perform an action then return a Dispatch(Action) combination.
// This Dispatch(Action) could be used by some other function to dispatch action to the store
// ########################################################
// ########################################################


// ########################################################
// ########################################################
// Auth Action Functions returning Action Objects
// ########################################################
// ########################################################

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authLogout = () => {
    const token = localStorage.getItem('token');
    if (token === undefined) {
        localStorage.removeItem('expirationDate');
    } else {
        axios.post(`${settings.API_SERVER}/api/user/logout`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            }
        )
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        });
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
    }

    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

// ########################################################
// ########################################################
// Auth Action Functions returning A Dispatch(Action) combination after performing some action
// ########################################################
// ########################################################

// This sets a timer, which would automatically logout the user after a specified time
export const authCheckTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout());
        }, expirationTime)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(`${settings.API_SERVER}/api/user/login`, {
            username: username,
            password: password
        })
            .then(res => {
                const token = res.data.token;
                const expirationDate = new Date(new Date().getTime() + SESSION_DURATION);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(authCheckTimeout(SESSION_DURATION));
            })
            .catch(err => {
                dispatch(authFail(err))
            });
    }
}


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(authLogout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(authLogout());
            } else {
                dispatch(authSuccess(token));
                dispatch(authCheckTimeout(expirationDate.getTime() - new Date().getTime()));
            }
        }
    }
}