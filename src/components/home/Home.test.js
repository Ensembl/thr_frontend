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

import Home from './Home';


describe('Home tests', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home/>, div);
        ReactDOM.unmountComponentAtNode(div)
    });

    it('should render the correct content', () => {
        const {getByText} = render(<Home/>);
        expect(getByText("The Track Hub Registry")).not.toBeNull()
        expect(getByText("A global centralised collection of publicly accessible track hubs")).not.toBeNull()
        const trackHubsLink = getByText('track hubs');
        expect(trackHubsLink.closest('a')).toHaveAttribute(
            'href',
            'http://genome.ucsc.edu/goldenPath/help/hgTrackHubHelp.html#Intro'
        )
    });

    it("should check if the track hubs paragraph is rendered correctly", () => {
        // Error:
        // TestingLibraryElementError: Unable to find an element with the text:
        // The goal of the Track Hub Registry is to allow third parties to advertise.
        // This could be because the text is broken up by multiple elements.
        // In this case, you can provide a function for your text matcher to make your matcher more flexible.

        // Solution: pass functions to matchers
        // thanks to point 4 in this article: https://polvara.me/posts/five-things-you-didnt-know-about-testing-library

        const paragraph = "The goal of the Track Hub Registry is to allow third parties to advertise track hubs, " +
            "and to make it easier for researchers around the world to discover and use track hubs containing " +
            "different types of genomic research data."

        const {getByText} = render(<Home/>);
        const getByTextWithMarkup = withMarkup(getByText)
        getByTextWithMarkup(paragraph)
    });
})

