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
import SearchDocsMenu from "./SearchDocsMenu";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";

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

const SearchAdvancedDocs = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <CssBaseline/>
                <SearchDocsMenu/>
                <main className={classes.content}>
                    <Typography component="h1" variant="h4">
                        Advanced Search
                    </Typography>
                    <p>
                        Complex queries can be made for more specific and customised searches, by entering terms and
                        operators according to the simple query language understood by the search application. The
                        language supports the use of wildcards, regular expressions, logical and fuzzy operators,
                        proximity searches and grouping.
                    </p>

                    <h4 id="Field queries">Field-specific queries</h4>
                    <p>
                        Searches can be confined to specific fields, i.e. those visible in the individual hub pages.
                        The indexed fields are defined by the TrackHub specification, but some useful examples
                        include species.scientific_name, assembly.accession, hub.shortLabel and hub.longLabel.

                        These are specified in the query string followed by a colon. If the search term in that
                        field is comprised of more than one word, they must be grouped together with brackets,
                        e.g.
                        <pre className={classes.codeBlock}>species.scientific_name:(Zea mays)</pre>
                        {/*<Box component="span" sx={{ display: 'block' }}>species.scientific_name:(Zea mays)</Box>*/}
                        Then use Logical Operators below to add additional search terms as and when you need them.
                    </p>
                    <h4 id="wildcards">Wildcards</h4>
                    <p>
                        Sometimes it may be useful to match records based on a query pattern. Wildcard searches can
                        be run on individual terms, using ? to replace a single character, and * to replace zero or
                        more characters:
                        <pre className={classes.codeBlock}>GRCh3? rna*</pre>
                        Be aware that wildcard queries, especially those with many terms, can use an enormous amount
                        of memory and perform very badly.
                    </p>

                    <h4 id="regex">Regular Expressions</h4>
                    <p>
                        Regular expression patterns can be embedded in the query string by wrapping them in
                        forward-slashes ("/"):
                        <pre className={classes.codeBlock}>species.scientific_name:/dan?io (re[ri]o)/</pre>
                        <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-regexp-query.html#regexp-syntax"
                           target="_blank">Supported regex syntax</a> (Elasticsearch website).
                    </p>

                    <h4 id="logical">Logical Operators</h4>
                    <p>
                        By default, all terms are optional, as long as one term matches. A search for <em>foo bar
                        baz</em> will find any document that contains one or more
                        of <em>foo</em> or <em>bar</em> or <em>baz</em>. Alternatively, all the familiar
                        AND, OR and NOT operators (also written &&, || and !) can be used. Using AND instead of the
                        default OR operator in the previous query would force all terms to be required.
                    </p>
                    <p>
                        Other boolean operators can be used in the query string itself to provide more control. The
                        preferred operators are + (this term must be present) and - (this term must not be present).
                        All other terms are optional. For example, this query:
                        <pre className={classes.codeBlock}>homo sapiens +rnaseq -srna</pre>
                        States that:
                        <ul>
                            <li>rnaseq must be present</li>
                            <li>srna must not be present</li>
                            <li>homo and sapiens are optional — their presence increases the relevance</li>
                        </ul>
                    </p>
                    <p>
                        When mixing operators, tt is important to take their precedence into account: NOT takes
                        precedence over AND, which takes precedence over OR. While the + and - only affect the term
                        to the right of the operator, AND and OR can affect the terms to the left and right.
                    </p>

                    <h4 id="grouping">Grouping</h4>
                    <p>
                        Multiple terms or clauses can be grouped together with parentheses, to form sub-queries:
                        <pre className={classes.codeBlock}>(rnaseq OR srna) AND homo</pre>
                    </p>

                    <h4 id="fuzzy">Fuzzy Operator</h4>
                    <p>
                        We can search for terms that are similar to, but not exactly like, our search terms, using
                        the fuzzy operator:
                        <pre className={classes.codeBlock}>hoom~ rnseq~ srmas~</pre>
                        This uses the Damerau-Levenshtein distance to find all terms with a maximum of two changes,
                        where a change is the insertion, deletion or substitution of a single character, or
                        transposition of two adjacent characters.
                    </p>
                    <p>
                        The default edit distance is 2, but an edit distance of 1 should be sufficient to catch 80%
                        of all human misspellings. It can be specified as:
                        <pre className={classes.codeBlock}>grhc38~1</pre>
                    </p>

                    <h4 id="proximity">Proximity Searches</h4>
                    <p>
                        While a phrase query (eg john smith) expects all of the terms in exactly the same order, a
                        proximity query allows the specified words to be further apart or in a different order. In
                        the same way that fuzzy queries can specify a maximum edit distance for characters in a
                        word, a proximity search allows us to specify a maximum edit distance of words in a phrase:
                        <pre className={classes.codeBlock}>"sapiens rnaseq"~5</pre>
                        The closer the text in a field is to the original order specified in the query string, the
                        more relevant that document is considered to be. When compared to the above example query,
                        the phrase "quick fox" would be considered more relevant than "quick brown fox".
                    </p>
                </main>
            </div>
        </>
    );
};


export default SearchAdvancedDocs;