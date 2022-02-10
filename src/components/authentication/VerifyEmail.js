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

import React, { useEffect } from 'react';
import queryString from 'query-string';

import {userActions} from "../../_actions";
import {useDispatch} from "react-redux";

export default function VerifyEmail({ history }) {

    const dispatch = useDispatch();

    useEffect(() => {
        // get token from the url
        const { token } = queryString.parse(window.location.search);

        // remove token from url to prevent http referer leakage
        history.replace(window.location.pathname);

        dispatch(userActions.verifyEmail(token));
    }, []);

    return (
        <div>
            <h3>Verifying Email...</h3>
        </div>
    )
}
