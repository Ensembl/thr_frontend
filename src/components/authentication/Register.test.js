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

import '@testing-library/jest-dom'
import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import userEvent from '@testing-library/user-event'
import Register from "./Register"

// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import {render, fireEvent, screen} from '../../_helpers/testing/test-utils'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import * as settings from "../../settings";

// We use msw to intercept the network request during the test,
// and return the response when receiving a get request to the `/api/user` endpoint
export const handlers = [
    rest.post(`${settings.API_SERVER}/api/register`, (req, res, ctx) => {
        return res(ctx.json({
            "success": "User registered successfully!",
            "token": "super_long_token"
        }))
    })
]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

test('mock successful user registration', async () => {

    const history = createMemoryHistory()
    render(
        <Router history={history}>
            render(<Register/>)
        </Router>
    )

    // should show no user initially, and not be fetching a user
    expect(screen.getByText(/Register as Track Hub Provider/i)).toBeInTheDocument()

    // filling the registration form
    userEvent.type(screen.getByRole('textbox', {name: /Username/i}), 'foo')
    userEvent.type(screen.getByRole('textbox', {name: /Email/i}), 'foo@mail.com')
    const passwords = screen.getAllByLabelText(/password/i)
    userEvent.type(passwords[0], 'complicated-password')
    userEvent.type(passwords[1], 'complicated-password')
    userEvent.type(screen.getByRole('textbox', {name: /First Name/i}), 'foo')
    userEvent.type(screen.getByRole('textbox', {name: /Last Name/i}), 'bar')
    userEvent.type(screen.getByRole('textbox', {name: /Affiliation/i}), 'EBI')
    // userEvent.type(screen.getByRole('textbox', {name: /agreement/i}), true)
    // userEvent.type(screen.getByRole('textbox', {name: /check_interval/i}), false)
    // userEvent.type(screen.getByRole('textbox', {name: /continuous_alert/i}), 'automatic')

    // TODO: figure out why the click event isn't working (aka taking us to expected page.. here it's the login page)
    console.log(history.location)
    // expect(await screen.findByText((/User registered successfully!/i))).toBeInTheDocument()


}, 30000)