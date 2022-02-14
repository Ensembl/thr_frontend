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
import ManagementDocsMenu from "./ManagementDocsMenu";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MainBreadcrumb from "../../generic/MainBreadcrumb";
import ReactJson from 'react-json-view'
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '-30px',
        display: 'flex',
    },
    item: {
        listStyleType: 'none',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const ModellingDocs = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <CssBaseline/>
                <ManagementDocsMenu/>
                <main className={classes.content}>
                    <MainBreadcrumb item="Track Hub Management"/>
                    <br/>

                    <Typography component="h1" variant="h4">
                        Managing Track Hubs with the Registry - An Overview
                    </Typography>

                    <p>
                        A single track data hub is formed by a set of files (i.e. hub.txt, genomes.txt) describing
                        the hub structure and content and one or more directories with genome assembly specific data
                        (bigBed, bigWig etc files) and configuration referred to as track data bases. The
                        configuration of a track data base is described in a file, usually named trackDB.txt,
                        defining the location of all the binary indexed track data for each assembly and directives
                        controlling the display of these data on a genome browser.
                    </p>
                    <p>
                        The Registry is designed to provide users with the ability to discover track hubs of
                        interest and easily load them into a genome browser. From this point of view, the purpose of
                        the Registry is not to store a complete representation of a track hub, but to introduce a
                        convenient representation with metadata to support search and that can be easily sent to
                        (due to its limited size) and parsed by a genome browser, thus overcoming some of the
                        challenges involved when parsing track data hubs.
                    </p>
                    <p>
                        A user is generally interested in displaying data for a particular assembly of a particular
                        species, and a browser just needs to do that, without having to deal with all possible
                        assemblies managed by a given hub. Within this perspective, <u>the unit of information
                        modelled by the Registry is given by track database (trackDb) settings</u> used in a Track
                        Hub's trackDb.txt file, which specifies display and configuration options for data
                        pertaining to a certain genome assembly. This is enough to allow the browser to organise the
                        display, as the data referred to in the trackDb settings reside at the original hub URL or
                        somewhere in another remote location. Therefore, this is the only information stored in
                        Registry.
                    </p>
                    <p>
                        <u>The Registry stores assembly track database settings in a JSON document</u>, with
                        metadata attributes and a simple tree-based structure facilitating parsing with <a
                        target="_blank"
                        href="http://genome.ucsc.edu/goldenPath/help/trackDb/trackDbHub.html#groupingTracks">complex
                        track organisations</a>. Some of the document attributes identify the hub the trackDb
                        belongs to, so that a track data hub is implicitly represented by the set of trackDb
                        documents referring to it.
                    </p>
                    <p>
                        The following section presents an interactive diagram of the trackDb <a target="_blank"
                                                                                                href="http://json-schema.org">JSON
                        schema</a> against which all trackDbs submitted to Registry are validated (read about the <a
                        href="/docs/management/overview#submission">submission process</a> to
                        know more). To access the original schema document, click <a
                        href="/static/trackhub/json_schema_1_0.json">here</a>.
                    </p>

                    <Typography id="schema" component="h4" variant="h5">
                        Track database schema
                    </Typography>
                    <br/>

                    <ReactJson
                        src={require("../../../static/trackhub/json_schema_1_0.json")}
                        name={false}
                        displayDataTypes={true}
                    />
                </main>
            </div>
        </>
    );
};


export default ModellingDocs;