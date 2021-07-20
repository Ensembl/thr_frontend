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

import {useEffect, useState} from 'react'
import InnerHTML from 'dangerously-set-html-content'


// Hook to make sure that the compiled 'dalliance-compiled.js' is ready before rendering the view
// thanks to: https://usehooks.com/useScript/
function useScript(src) {
    // Keep track of script status ("idle", "loading", "ready", "error")
    const [status, setStatus] = useState(src ? "loading" : "idle");

    useEffect(
        () => {
            // Allow falsy src value if waiting on other data needed for
            // constructing the script URL passed to this hook.
            if (!src) {
                setStatus("idle");
                return;
            }

            // Fetch existing script element by src
            // It may have been added by another intance of this hook
            let script = document.querySelector(`script[src="${src}"]`);

            if (!script) {
                // Create script
                script = document.createElement("script");
                script.src = src;
                script.async = true;
                script.setAttribute("data-status", "loading");
                // Add script to document body
                document.body.appendChild(script);

                // Store status in attribute on script
                // This can be read by other instances of this hook
                const setAttributeFromEvent = (event) => {
                    script.setAttribute(
                        "data-status",
                        event.type === "load" ? "ready" : "error"
                    );
                };

                script.addEventListener("load", setAttributeFromEvent);
                script.addEventListener("error", setAttributeFromEvent);
            } else {
                // Grab existing script status from attribute and set to state.
                setStatus(script.getAttribute("data-status"));
            }

            // Script event handler to update status in state
            // Note: Even if the script already exists we still need to add
            // event handlers to update the state for *this* hook instance.
            const setStateFromEvent = (event) => {
                setStatus(event.type === "load" ? "ready" : "error");
            };

            // Add event listeners
            script.addEventListener("load", setStateFromEvent);
            script.addEventListener("error", setStateFromEvent);

            // Remove event listeners on cleanup
            return () => {
                if (script) {
                    script.removeEventListener("load", setStateFromEvent);
                    script.removeEventListener("error", setStateFromEvent);
                }
            };
        },
        [src] // Only re-run effect if script src changes
    );

    return status;
}

export default function BiodallianceView({location}) {

    const status = useScript(
        "http://www.biodalliance.org/release-0.13/dalliance-compiled.js"
    );

    const urlParams = location.search
    const params = new URLSearchParams(urlParams)

    const assembly = params.get('assembly')
    const name = params.get('name')
    const hubUrl = params.get('url')

    let chr
    let viewStart
    let viewEnd
    let cookieKey

    let coordSystem = {
        speciesName: 'Human',
        taxon: 9606,
        auth: 'GRCh',
    }

    let genomeSource = {
        name: 'Genome',
        tier_type: 'sequence'
    }

    let geneSource = {
        name: 'Genes'
    }

    if (assembly === 'hg19') {
        chr = 22
        viewStart = 29890000
        viewEnd = 30050000
        cookieKey = 'human37'

        coordSystem.speciesName = 'Human'
        coordSystem.taxon = 9606
        coordSystem.auth = 'GRCh'
        coordSystem.version = '37'
        coordSystem.ucscName = 'hg19'

        genomeSource.twoBitURI = '//www.biodalliance.org/datasets/hg19.2bit'

        geneSource.desc = 'Gene structures from GENCODE 19'
        geneSource.bwgURI = '//www.biodalliance.org/datasets/gencode.bb'
        geneSource.stylesheet_uri = '//www.biodalliance.org/stylesheets/gencode.xml'
        geneSource.trixURI = '//www.biodalliance.org/datasets/geneIndex.ix'

    } else if (assembly === 'hg38') {
        chr = 22
        viewStart = 29890000
        viewEnd = 30050000
        cookieKey = 'human38'

        coordSystem.speciesName = 'Human'
        coordSystem.taxon = 9606
        coordSystem.auth = 'GRCh'
        coordSystem.version = '38'
        coordSystem.ucscName = 'hg38'

        // geneSource.name = 'GENCODEv21'
        genomeSource.twoBitURI = 'https://www.biodalliance.org/datasets/hg38.2bit'

        geneSource.desc = 'Gene structures from GENCODE 21'
        geneSource.bwgURI = 'https://www.biodalliance.org/datasets/GRCh38/gencode.v21.annotation.bb'
        geneSource.stylesheet_uri = '//www.biodalliance.org/datasets/gencode.bb'
        geneSource.trixURI = 'https://www.biodalliance.org/datasets/GRCh38/gencode.v21.annotation.ix'

    } else if (assembly === 'mm10') {
        chr = 19
        viewStart = 30000000
        viewEnd = 30100000
        cookieKey = 'mouse38'

        coordSystem.speciesName = 'Mouse'
        coordSystem.taxon = 10090
        coordSystem.auth = 'GRCm'
        coordSystem.version = '38'
        coordSystem.ucscName = 'mm10'

        genomeSource.twoBitURI = '//www.biodalliance.org/datasets/GRCm38/mm10.2bit'

        geneSource.desc = 'Gene structures from GENCODE M2'
        geneSource.bwgURI = '//www.biodalliance.org/datasets/GRCm38/gencodeM2.bb'
        geneSource.stylesheet_uri = '//www.biodalliance.org/stylesheets/gencode.xml'
        geneSource.trixURI = '//www.biodalliance.org/datasets/GRCm38/gencodeM2.ix'
    }

    const browserScript = `
        <script language="javascript" src="//www.biodalliance.org/release-0.13/dalliance-compiled.js"></script>
        <script language="javascript">
          new Browser({
            chr:          ${chr},
            viewStart:    ${viewStart},
            viewEnd:      ${viewEnd},
            cookieKey:    '${cookieKey}',
        
            coordSystem: {
              speciesName: '${coordSystem.speciesName}',
              taxon: ${coordSystem.taxon},
              auth: '${coordSystem.auth}',
              version: '${coordSystem.version}',
              ucscName: '${coordSystem.ucscName}'
            },
        
            sources: [
               {
                  name:                 '${genomeSource.name}',
                  twoBitURI:            '${genomeSource.twoBitURI}',
                  tier_type:            '${genomeSource.tier_type}'
               },
               {
                  name:                 '${geneSource.name}',
                  desc:                 '${geneSource.desc}',
                  bwgURI:               '${geneSource.bwgURI}',
                  stylesheet_uri:       '${geneSource.stylesheet_uri}',
                  collapseSuperGroups:  true,
                  trixURI:              '${geneSource.trixURI}'
               },
            ],
            
            uiPrefix: '//www.biodalliance.org/release-0.13/',
            
            // setDocumentTitle: false,
            disablePoweredBy: true,
            // noTitle: true,
            
            hubs: [ '${hubUrl}' ]
          });
        </script>
        
        <div id="svgHolder"></div>
    `

    return (
        <>
            <h1>View Hub <strong>{name}</strong> in Embedded Genome Browser</h1>
            <h3>Instructions</h3>
            <ul>
                <li>Click on on the '+' icon (right) or press 'A'</li>
                <li>Click the tab '{name}'</li>
                <li>Select the tracks you want to display</li>
            </ul>
            <p>The tracks will then automatically show under the genome sequence and gene structure tracks.</p>
            <p><strong>If the hub tab is not available it's likely that the server where the hub is hosted is
                not configured to serve the hub files over HTTP with support for CORS (Cross origin requests).</strong>
            </p>

            {
                status === "ready" && (
                    <div>
                        <InnerHTML html={browserScript}/>
                    </div>

                )
            }
        </>
    );
}