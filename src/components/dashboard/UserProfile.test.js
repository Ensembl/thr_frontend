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

import React from 'react';
import ReactDOM from 'react-dom'
import {render, waitFor, cleanup, fireEvent, screen} from '@testing-library/react';

import UserProfile from './UserProfile';

import axios from 'axios';

jest.mock('axios');


describe('User Profile tests', () => {

    // TODO: understand why we get TypeError: Cannot read property 'then' of undefined after running the commented test
    // it('should render without crashing', () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(<UserProfile/>, div);
    //     ReactDOM.unmountComponentAtNode(div)
    // });

    it('should mock axios request and display user info', async () => {
        const mockedResponse = {
            data: {
                'username': 'usr',
                'email': 'usr@mail.com',
                'first_name': 'foo',
                'last_name': 'bar',
                'affiliation': 'EBI',
                'check_interval': 'Automatic',
                'continuous_alert': true
            }
        };

        axios.get.mockImplementationOnce(() => Promise.resolve(mockedResponse));
        const {getByDisplayValue} = render(<UserProfile/>);

        await waitFor(() => {
            //same as: expect(getByDisplayValue(mockedResponse.data.username)).toBeInTheDocument();
            getByDisplayValue(mockedResponse.data.username);
            getByDisplayValue(mockedResponse.data.email);
            getByDisplayValue(mockedResponse.data.first_name);
            getByDisplayValue(mockedResponse.data.last_name);
            getByDisplayValue(mockedResponse.data.affiliation);
            getByDisplayValue(mockedResponse.data.check_interval);
            getByDisplayValue(mockedResponse.data.continuous_alert);
        });
    })

    it('should fetch erroneously data from an API', async () => {
        const errorMessage = 'Network Error';

        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
    });
});