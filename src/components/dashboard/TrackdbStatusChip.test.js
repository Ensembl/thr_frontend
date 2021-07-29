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

import TrackdbStatusChip from './TrackdbStatusChip';
import each from "jest-each";


describe('Trackdb Status Chip tests', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TrackdbStatusChip/>, div);
        ReactDOM.unmountComponentAtNode(div)
    });

    each([
        ['', 'Unchecked'],
        [undefined, 'Unchecked'],
        ['All is Well', 'All is Well'],
        ['Remote Data Unavailable', 'Remote Data Unavailable']
    ]).it("should check if '%s' status is displayed correctly (as '%s')", (trackdbStatusValue, expected) => {
        const { getByText } = render(<TrackdbStatusChip trackdbStatus={trackdbStatusValue}/>);
        getByText(expected);
    });
})

