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
import {render, fireEvent} from '@testing-library/react'
import withMarkup from '../../withMarkup'

import SubmitHub from './SubmitHub';


describe('SubmitHub tests', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SubmitHub/>, div);
        ReactDOM.unmountComponentAtNode(div)
    });

    it('should render the correct content', () => {
        const {getByText} = render(<SubmitHub/>);
        getByText('Submit/Update Hub')
        getByText('Using this API, you can:')
    });
})

