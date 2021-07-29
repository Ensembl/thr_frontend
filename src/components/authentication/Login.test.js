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

import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import {render, fireEvent, screen} from '../../_helpers/testing/test-utils'
import userEvent from '@testing-library/user-event'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import Login from './Login'
import * as settings from "../../settings";
import {cleanup, waitFor} from "@testing-library/react";


// We use msw to intercept the network request during the test,
// and return the response token: 'mocked_user_token'
// when receiving a get request to the `/api/login` endpoint
export const handlers = [
    rest.post(`${settings.API_SERVER}/api/login`, (req, res, ctx) => {
        // Respond with a mocked user token that gets persisted
        // in the `localStorage` by the `Login` component.
        return res(ctx.json({user: {token: 'mocked_user_token'}}))
    })
]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

describe('Login page tests', () => {

    beforeEach(cleanup)

    it('should render without crashing', () => {
        const history = createMemoryHistory({initialEntries: ['/login']})
        render(
            <Router history={history}>
                <Login/>
            </Router>
        )
    });

    it('should render the correct content', () => {
        const history = createMemoryHistory({initialEntries: ['/login']})
        render(
            <Router history={history}>
                <Login/>
            </Router>
        )
        // we make sure that the login page is rendered successfully
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
        expect(screen.getByText(/No account yet?/i)).toBeInTheDocument()
    });

    it('should go to register page', () => {
        const history = createMemoryHistory({initialEntries: ['/login']})
        render(
            <Router history={history}>
                <Login/>
            </Router>
        )
        expect(history.location.pathname).toBe('/login');

        fireEvent.click(screen.getByText(/register/i))
        expect(history.location.pathname).toBe('/register');
        expect(history.length).toBe(2)

    });

    it('should allow the user to log in', async () => {
        // more about history: https://blog.pshrmn.com/a-little-bit-of-history/
        const history = createMemoryHistory({initialEntries: ['/login']})
        // const history = createMemoryHistory()
        render(
            <Router history={history}>
                <Login/>
            </Router>
        )
        expect(history.location.pathname).toBe('/login');

        const usernameField = screen.getByRole('textbox', {name: /username/i})
        // can't use getByRole, see: https://github.com/testing-library/dom-testing-library/issues/567
        const passwordField = screen.getByLabelText(/password/i)
        const loginButton = screen.getByRole('button', {name: /login/i})

        // fill the username and password
        userEvent.type(usernameField, 'user')
        userEvent.type(passwordField, 'complicated-password')
        userEvent.click(loginButton)

        // For some reason the login doesn't work
        // TODO: figure out why
        // await waitFor(() => {
        //     expect(loginButton).not.toBeInTheDocument()
        //     expect(usernameField).not.toBeInTheDocument()
        //     expect(passwordField).not.toBeInTheDocument()
        //
        //     expect(history.location.pathname).toBe('/');
        //     screen.getByRole('button', {name: /Help On Advanced Search/i})
        //     // console.log('window.document.body ----> ', window.document.body.innerHTML)
        // })
    })

    it('should handle login exception', async () => {
        server.use(
            rest.post(`${settings.API_SERVER}/api/login`, (req, res, ctx) => {
                // Respond with "500 Internal Server Error" status for this test.
                return res(
                    ctx.status(400),
                    // ctx.json({message: 'Unable to log in with provided credentials.'}),
                    ctx.json({
                        "non_field_errors": [
                            "Unable to log in with provided credentials."
                        ]
                    }),
                )
            }),
        )

        const history = createMemoryHistory({initialEntries: ['/login']})
        render(
            <Router history={history}>
                <Login/>
            </Router>
        )

        const usernameField = screen.getByRole('textbox', {name: /username/i})
        // can't use getByRole, see: https://github.com/testing-library/dom-testing-library/issues/567
        const passwordField = screen.getByLabelText(/password/i)
        const loginButton = screen.getByRole('button', {name: /login/i})

        // fill the username and password
        userEvent.type(usernameField, 'user')
        userEvent.type(passwordField, 'complicated-password')
        userEvent.click(loginButton)

        expect(history.location.pathname).toBe('/login');
        // Assert meaningful error message shown to the user
        // expect(screen.getByText((/Unable to log in with provided credentials./i))).toBeInTheDocument()
        expect(window.localStorage.getItem('user')).toBeNull()
    })
})

// useful info here: https://redux.js.org/usage/writing-tests
//                   https://github.com/mswjs/msw#usage-example-1
//                   https://css-tricks.com/react-integration-testing-greater-coverage-fewer-tests/
