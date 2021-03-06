import * as settings from "../settings";

export const userService = {
    login,
    logout,
    register,
    changePassword
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    };

    return fetch(`${settings.API_SERVER}/api/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    let user = JSON.parse(localStorage.getItem('user'));

    // log the user out only if he's already logged in
    if (user && user.token) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${user.token}`
            },
            body: JSON.stringify({})
        };

        // remove the token for the DB by calling 'logout' API
        return fetch(`${settings.API_SERVER}/api/logout`, requestOptions)
            .then(handleResponse)
            .then(user => {
                // remove user from local storage to log user out
                localStorage.removeItem('user');
                return user;
            });
    }
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(`${settings.API_SERVER}/api/register`, requestOptions).then(handleResponse);
}

function changePassword(old_password, new_password1, new_password2) {
    let user = JSON.parse(localStorage.getItem('user'));
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${user.token}`
        },
        body: JSON.stringify({old_password, new_password1, new_password2})
    };

    return fetch(`${settings.API_SERVER}/api/change_password`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload();
            }

            // in case there is an error we send text containing all of them to the UI
            // there, it's parsed to JSON and showed as desired
            return Promise.reject(text);
        }

        return data;
    });
}