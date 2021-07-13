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

import React from "react";
import ReactDOM from 'react-dom'
import {render, fireEvent, screen} from "@testing-library/react"

import SearchForm from "./SearchForm";
import {Button} from "@material-ui/core";
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import each from "jest-each";

describe('SearchForm tests', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SearchForm/>, div);
        ReactDOM.unmountComponentAtNode(div)
    });

    const handleSearch = jest.fn();
    const history = createMemoryHistory();

    // get rid of Error: Not implemented: HTMLFormElement.prototype.submit
    handleSearch.mockImplementation(event => {
        event.preventDefault();
    });

    it('should navigate to search page without search keyword', () => {
        render(
            <Router history={history}>
                <SearchForm onSubmit={handleSearch}/>
            </Router>
        );
        const submitSearchButton = screen.getByLabelText('search');
        expect(submitSearchButton).toBeInTheDocument();

        userEvent.click(submitSearchButton);
        expect(history.length).toBe(2);
        expect(history.location.pathname).toBe('/search');
        // expect(handleSearch).toHaveBeenCalled();
    });

    each([
        ['hg19'],
        ['human']
    ]).it("should navigate to search page with '%s' search keyword (as parameter)", (query) => {
        render(
            <Router history={history}>
                <SearchForm onSubmit={handleSearch}/>
            </Router>
        );
        const submitSearchButton = screen.getByLabelText('search');
        expect(submitSearchButton).toBeInTheDocument();

        userEvent.type(screen.getByLabelText("searchBox"), query)
        userEvent.click(submitSearchButton);

        expect(history.location.pathname).toBe('/search');
        expect(history.location.search).toBe(`?q=${query}`);
    });
})
