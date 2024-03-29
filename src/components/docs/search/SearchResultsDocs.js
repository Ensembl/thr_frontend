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
import SearchDocsMenu from "./SearchDocsMenu";
import {Typography} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import CssBaseline from "@mui/material/CssBaseline";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '-30px',
        display: 'flex',
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: theme.typography.fontWeightRegular,
        color: 'white'
    },
    summary: {
        backgroundColor: theme.palette.primary.main
    },
    item: {
        listStyleType: 'none',
    },
    chipContent: {
        marginLeft: '8px'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const SearchResultsDocs = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <CssBaseline/>
                <SearchDocsMenu/>
                <main className={classes.content}>
                    <Typography component="h1" variant="h4">
                        Search Results Page
                    </Typography>
                    <p>
                        If track hubs are found containing the entered keywords the results are displayed in order
                        of relevance on the search results tab on the right hand side of each results page.
                        Pagination is supported with five results per page shown
                    </p>
                    <p>
                        Each page of the search results tab will tell the currently displayed range of results and
                        show a box for each result. The bottom of the page contains navigation links highlighting
                        the current page number and providing links to jump to other pages.
                    </p>
                    <p>
                        <img src={require("../../../static/img/search_results.png").default} alt=""/>
                    </p>

                    <p>
                        Each result contains summary information about matching data for a genome that is supported
                        by a track data hub. The title of the result contains a description of the matching track
                        data hub, followed by the name of the hub, species information (i.e. NCBI taxonomy ID,
                        scientific name) and genome assembly information (i.e. NCBI assembly accession number and
                        name).
                    </p>

                    <Typography id="filter" component="h4" variant="h5">
                        Filtering Results
                    </Typography>
                    <p>
                        On the left hand side of the results page various filter options (i.e. facets) are shown,
                        grouped according to four different types in their corresponding panels of the side bar:
                        Species, Assembly, Hub and Data Type.
                    </p>
                    <p>
                        The top panel of the side bar, titled "Current Filters", presents a list of currently
                        selected filters.
                    </p>
                    <p><img src={require("../../../static/img/current_filters.png").default} alt=""/></p>
                    <p>
                        By default, when the user initiates a new search with no filters, the panel shows only the
                        query as a filter. By clicking on one of the filters marked with a cross, the Registry will
                        redo the search with that filter excluded.
                    </p>
                    <p>
                        All filter panels are collapsed by default. Click on each panel title to list all available
                        options for the corresponding filter.
                    </p>
                    <p>
                        For instance, the Species filter presents a list of species matching the query where each
                        species is reported with the numbers of results (i.e. data tracks) referring to it.
                    </p>
                    <p><img src={require("../../../static/img/species_facet.png").default} alt=""/></p>
                    <p>
                        Clicking on one of the listed facet values will filter the results by the chosen species and
                        will change the current filter panel to display the selection. All other filters work
                        exactly in the same way.
                    </p>
                    <p>
                        The Assembly filter presents a list of names for the genome assemblies matching the query,
                        each one reported with the corresponding number of search results. Similarly, the Hub panel
                        allows to filter the search results by the name of the matching track data hubs. The final
                        facet is Data Type, where one can filter according to the genomic data type of the data
                        tracks of the matching track hubs.
                    </p>

                    <Typography id="status" component="h4" variant="h5">
                        Data Tracks Status
                    </Typography>
                    <p>
                        For each search result summary, the status, as known by the Registry, is displayed. Status
                        is one of the following:
                    </p>
                    <p>
                        <strong>"OK Status"</strong><br/>
                        This status means the remote track data is available. It is the result of a regular check
                        performed by the Registry on the genome assembly supported by the track hub. In this case,
                        the search result will have a blue border and will show the button to load the data in blue,
                        as shown in the image above.
                    </p>

                    <p>
                        <strong>"Unknow Status"</strong><br/>
                        This status means the remote track data has not been checked. The search result will have,
                        in this case, a yellow border and will show a yellow label with the text "Unknown status",
                        as shown in the figure below.
                    </p>
                    <p><img src={require("../../../static/img/unknow_status_result.png").default} alt=""/></p>
                    <p>
                        It is still possible to load the tracks into a genome browser for display (though it iss not
                        guaranteed it will work) and show more detailed information.
                    </p>
                    <p>
                        <strong id="kostatus">"Unavailable Data"</strong><br/>
                        This status meants some remote track data is not available. The search result will have, in
                        this case, a red border and will show a label of the same color with the text "Remote Data
                        Unavailable", as it is shown in the figure below.
                    </p>
                    <p><img src={require("../../../static/img/unavailable_status_result.png").default} alt=""/></p>
                    <p>
                        In this case, the upload option is not available and it is not possible to view tracks in a
                        genome browser. It is still possible to view more detailed information about the hub, see
                        See <a href="#view">Viewing more information</a>. The report will also contain details on
                        the faulty tracks.
                    </p>

                    <Typography id="load" component="h4" variant="h5">
                        Loading Track Hubs into Genome Browsers
                    </Typography>
                    <p>
                        A button on the right hand side of each search result allows the user to view the track hub
                        data directly into an available genome browser.
                    </p>
                    <p>
                        <img src={require("../../../static/img/load_result.png").default} alt=""/>
                    </p>
                    <p>
                        Clicking on it will display a dropdown with the available choices, e.g. "Ensembl" or "UCSC".
                        Upon selection, another page will open with the connection established between the genome
                        browser and the track hub.
                    </p>

                    <Typography id="view" component="h4" variant="h5">
                        Viewing more information
                    </Typography>
                    <p>
                        Click on the "Info" button on the right hand side of each search result to view more
                        detailed information about the corresponding track hub and its supported genome assembly.
                    </p>
                    <p>
                        <img src={require("../../../static/img/view_more_info.png").default} alt=""/>
                    </p>
                    <p>
                        You'll be presented three panels, as shown in the image above.
                    </p>
                    <p>
                        The first panel displays general information about the track data base: the total number of
                        tracks related to the genome assembly, the number linked to remote data, the data type of
                        the tracks (can be one of "genomics", "epigenomics", "transcriptomics", "proteomics"), the
                        file types of the track data (e.g. bigWig, bigBED, VCF, BAM). The panel also contains a
                        button allowing direct access to the remote genome assembly <a
                        href="http://genome.ucsc.edu/goldenPath/help/trackDb/trackDbHub.html" target="_blank" rel="noreferrer">trackDB
                        configuration file</a>.
                    </p>
                    <p>
                        The second panel, Hub, reports information about the track hub supporting the genome
                        assembly, showing its attributes as they are originally defined in the track hub property
                        file. The 'View' buttonp provides connection to the remote location and the original file.
                    </p>
                    <p>
                        The last panel shows information about the species with a link, Taxonomy, leading to a page
                        on the NCBI web site displaying taxonomy information about the organism. There is also
                        general information about the genome assembly; the accession number is a link to the
                        corresponding assembly page on the NCBI web site.
                    </p>
                    <p>
                        If some or all the <a href="#kostatus">data tracks are unavailable</a>, a panel at the
                        bottom of the panel will show a detailed report about the failing tracks, as in the example
                        below:
                    </p>
                    <p>
                        <img src={require("../../../static/img/error_log.png").default} alt=""/>
                    </p>
                    <p>
                        For each unavailable track, name and remote URL will be shown, together with a description
                        of the detected error.
                    </p>
                </main>
            </div>
        </>
    );
};


export default SearchResultsDocs;