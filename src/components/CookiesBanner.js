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

import CookieConsent, {Cookies} from "react-cookie-consent";

function CookiesBanner() {

    return (
        <CookieConsent
            style={{ background: "#e99002" }}
            buttonStyle={{ background: "#008cba", color: "#e7e7e7", fontSize: "16px" }}
            onAccept={() => {Cookies.set("trackhub-registry-anonymous-browsing", true)}}
            expires={90}
        >
            <strong>
                This website uses cookies. By continuing to browse this site, you are agreeing to the use of our site
                cookies. We also collect some limited personal information when you browse the site. You can find the
                details in our <a
                href="http://www.ebi.ac.uk/data-protection/privacy-notice/trackhub-registry-anonymous-browsing">Privacy
                Policy.</a>
            </strong>

        </CookieConsent>
);
}

export default CookiesBanner;