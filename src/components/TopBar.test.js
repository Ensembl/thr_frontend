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

// import React from "react";
import ReactDOM from 'react-dom'
import { Button } from '@material-ui/core';

import {render, fireEvent} from "@testing-library/react"

import TopBar from "./TopBar";


describe('TopBar tests', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TopBar/>, div);
        ReactDOM.unmountComponentAtNode(div)
    });

    it('should show register and login buttons when logged out', () => {
        const {getByText} = render(<TopBar/>);
        expect(getByText("The Track Hub Registry")).not.toBeNull()
        expect(getByText("Register")).not.toBeNull()
        expect(getByText("Login")).not.toBeNull()
    });

    // TODO: add login case after the authentication branch is merged to master
    // more details here: https://redux.js.org/usage/writing-tests

    it('should navigate to login page when login is clicked', () => {
        const {getByText} = render(<Button href="/login">Login</Button>);
        const link = getByText('Login');
        fireEvent.click(link);
        expect(link.closest('a')).toHaveAttribute('href', '/login')
    });

    // TODO: is there a way to DRY this?
    it('should navigate to register page when register is clicked', () => {
        const {getByText} = render(<Button href="/register">Register</Button>);
        const link = getByText('Register');
        fireEvent.click(link);
        expect(link.closest('a')).toHaveAttribute('href', '/register')
    });
})
