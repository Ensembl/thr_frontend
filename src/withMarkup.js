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

// TODO: put this file in _helpers directory

// The function gets called for each node we are rendering.
// It receives two arguments: the node's content and the node itself.
// All we have to do is to return true or false depending on if the node is the one we want.
// more details: https://newbedev.com/how-to-query-by-text-string-which-contains-html-tags-using-react-testing-library
const withMarkup = (query) => (text) => query((content, node) => {
        const hasText = (node) => node.textContent === text;
        const childrenDontHaveText = Array.from(node.children).every(child => !hasText(child));
        return hasText(node) && childrenDontHaveText;
    });

export default withMarkup;
