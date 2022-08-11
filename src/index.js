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
import { createRoot } from 'react-dom/client';
import App from './App';

import reportWebVitals from './reportWebVitals';
import {Container} from "@material-ui/core";
import 'typeface-open-sans';

import { Provider } from 'react-redux';
import { store } from './redux/helpers';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  // TODO: Fix this
  // Strict Mode has gotten stricter in React 18, it breaks the filters and some part of the UI
  // https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-strict-mode
  // <React.StrictMode>
    <Provider store={store}>
        <Container maxWidth="xl">
            <App />
        </Container>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
