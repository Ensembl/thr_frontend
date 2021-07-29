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
import {render as rtlRender} from '@testing-library/react'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
// Import your own reducer
import rootReducer from '../../_reducers';

function render(
    ui,
    {
        preloadedState,
        // store = configureStore({reducer: {user: rootReducer}, preloadedState}),
        store = configureStore({reducer: rootReducer, preloadedState}),
        ...renderOptions
    } = {}
) {
    function Wrapper({children}) {
        return <Provider store={store}>{children}</Provider>
    }

    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

// re-export everything
export * from '@testing-library/react'
// override render method
export {render}