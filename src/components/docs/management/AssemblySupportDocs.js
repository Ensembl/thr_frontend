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
import Grid from "@material-ui/core/Grid";
import ManagementDocsMenu from "./ManagementDocsMenu";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import MainBreadcrumb from "../../generic/MainBreadcrumb";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";

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
    codeBlock: {
        display: 'block',
        borderRadius: '5px',
        padding: '10px',
        background: '#eeeeee',
        overflowX: 'scroll',
        minWidth: '100px',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const AssemblySupportDocs = () => {
    const classes = useStyles();

    const example = `{ 
  "url" : "http://www.domain.com/test/hub.txt", 
  "assemblies": {
    "TAIR10": "GCA_000001735.1"
  }
}`

    return (
        <>
            <div className={classes.root}>
                <CssBaseline/>
                <ManagementDocsMenu/>
                <main className={classes.content}>
                    <MainBreadcrumb item="Track Hub Management"/>
                    <br/>
                    <Typography component="h1" variant="h4">
                        Genome Assembly Support
                    </Typography>

                    <p>
                        In order to correctly categorise TrackHubs into the Track Hub Registry it is essential to
                        tag hubs against the right assembly version during the submission process. The Track Hub
                        Registry attempts to normalise any given assembly name into a suitable <a
                        href="https://www.ebi.ac.uk/ena/browse/genome-assembly-database" target="_blank">Genome
                        Collection Accession (GCA)</a> during submission e.g. the UCSC assembly
                        name <strong>hg19</strong> is automatically converted into <a
                        href='http://www.ebi.ac.uk/ena/data/view/GCA_000001405.1'
                        target="_blank">GCA_000001405.1</a>. All hubs registered with the Track Hub Registry should
                        have a GCA available in the Genome Assembly Database to map to and is a current requirement
                        of submitting to the registry. All modern assemblies should conform to this requirement.
                    </p>

                    <p>
                        The Track Hub Registry promotes interoperability of hubs in all major genome browsers. As
                        such we recommend you use the UCSC assembly name where available.
                    </p>

                    <Typography id="mapping" component="h4" variant="h5">
                        Mapping Track Hub Assembly Names
                    </Typography>
                    <br/>
                    <Typography id="inucsc" component="h4" variant="h6">
                        When a Genome is Available in the UCSC Genome Browser
                    </Typography>

                    <p>
                        If your genome is in UCSC you should use the UCSC accession in
                        your <strong>genomes.txt</strong> file as shown below:
                    </p>
                    <pre className={classes.codeBlock}>
                                <strong>genome</strong> hg19
                                <br/>
                                <strong>trackDb</strong> hg19/trackDb.txt
                            </pre>
                    <p>
                        The Track Hub Registry will normalise this into a suitable GCA accession. For genomes with
                        multiple patch releases i.e. <a
                        href="http://www.ncbi.nlm.nih.gov/projects/genome/assembly/grc/human#GRCh37"
                        target="_blank">GRCh37/hg19</a>, <a
                        href="http://www.ncbi.nlm.nih.gov/projects/genome/assembly/grc/human#GRCh38"
                        target="_blank">GRCh38/hg38</a> and <a
                        href="http://www.ncbi.nlm.nih.gov/projects/genome/assembly/grc/mouse#GRCm38"
                        target="_blank">GRCm38/mm10</a> we normalise to the original GCA used for that assembly
                        version.
                    </p>

                    <Typography id="notinucsc" component="h4" variant="h6">
                        When a Genome is not Available in the UCSC Genome Browser
                    </Typography>
                    <p>
                        If you genome is not in UCSC we recommend you use the assembly name as present in the GCA
                        record. You can find this either by querying the <a
                        href="http://www.ncbi.nlm.nih.gov/genome/browse/" target="_blank">NCBI Genome list</a> for
                        your species of interest and clicking on
                        the <strong>Organism/Name</strong> or <strong>Assemblies</strong> links.
                    </p>

                    <p>
                        For example <em>Arabidopsis thaliana</em> is a genome not available in UCSC. Searching at
                        NCBI will lead you to the active assembly name <strong>TAIR10</strong> and the accession <a
                        href="https://www.ebi.ac.uk/ena/data/view/GCA_000001735.1"
                        target="_blank">GCA_000001735.1</a>. Your <strong>genomes.txt</strong> file should be
                        structured as shown below:
                    </p>
                    <pre className={classes.codeBlock}>
                                <strong>genome</strong> TAIR10
                                <br/>
                                <strong>trackDb</strong> TAIR10/trackDb.txt
                            </pre>

                    <p>
                        When submitting the hub to the Track Hub Registry you must tell the registry the mapping
                        between TAIR10 and GCA_000001735.1 like so:
                    </p>
                    <pre className={classes.codeBlock}>
                                {example}
                            </pre>
                    <p>
                        More details are available from the <a
                        href="/docs/api/registration/reference#post_trackhub_msg_format">submissions
                        API reference</a>.
                    </p>
                </main>
            </div>
        </>
    );
};


export default AssemblySupportDocs;