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
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
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

                    <Typography id="Field queries" component="h4" variant="h5">
                        Field-specific queries
                    </Typography>
                    <p>
                        Searches can be confined to specific fields, i.e. those visible in the individual hub pages.
                        The indexed fields are defined by the TrackHub specification, but some useful examples
                        include species.scientific_name, assembly.accession, hub.shortLabel and hub.longLabel.

                        These are specified in the query string followed by a colon. If the search term in that
                        field is comprised of more than one word, they must be grouped together with brackets,
                        e.g.
                    </p>
                    <pre className={classes.codeBlock}>species.scientific_name:(Zea mays)</pre>
                    <p>
                        Then use Logical Operators below to add additional search terms as and when you need them.
                    </p>

                    <Typography id="wildcards" component="h4" variant="h5">
                        Wildcards
                    </Typography>
                    <p>
                        Sometimes it may be useful to match records based on a query pattern. Wildcard searches can
                        be run on individual terms, using ? to replace a single character, and * to replace zero or
                        more characters:
                    </p>
                    <pre className={classes.codeBlock}>GRCh3? rna*</pre>
                    <p>
                        Be aware that wildcard queries, especially those with many terms, can use an enormous amount
                        of memory and perform very badly.
                    </p>

                    <Typography id="regex" component="h4" variant="h5">
                        Regular Expressions
                    </Typography>
                    <p>
                        Regular expression patterns can be embedded in the query string by wrapping them in
                        forward-slashes ("/"):
                    </p>
                    <pre className={classes.codeBlock}>species.scientific_name:/dan?io (re[ri]o)/</pre>
                    <p>
                        <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-regexp-query.html#regexp-syntax"
                           target="_blank" rel="noreferrer">Supported regex syntax</a> (Elasticsearch website).
                    </p>

                    <Typography id="logical" component="h4" variant="h5">
                        Logical Operators
                    </Typography>
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
                    </p>
                    <pre className={classes.codeBlock}>homo sapiens +rnaseq -srna</pre>
                    <p>
                        States that:
                    </p>
                    <ul>
                        <li>rnaseq must be present</li>
                        <li>srna must not be present</li>
                        <li>homo and sapiens are optional — their presence increases the relevance</li>
                    </ul>

                    <p>
                        When mixing operators, tt is important to take their precedence into account: NOT takes
                        precedence over AND, which takes precedence over OR. While the + and - only affect the term
                        to the right of the operator, AND and OR can affect the terms to the left and right.
                    </p>

                    <Typography id="grouping" component="h4" variant="h5">
                        Grouping
                    </Typography>
                    <p>
                        Multiple terms or clauses can be grouped together with parentheses, to form sub-queries:
                    </p>
                    <pre className={classes.codeBlock}>(rnaseq OR srna) AND homo</pre>

                    <Typography id="fuzzygrouping" component="h4" variant="h5">
                        Fuzzy Operator
                    </Typography>
                    <p>
                        We can search for terms that are similar to, but not exactly like, our search terms, using
                        the fuzzy operator:
                    </p>
                    <pre className={classes.codeBlock}>hoom~ rnseq~ srmas~</pre>
                    <p>
                        This uses the Damerau-Levenshtein distance to find all terms with a maximum of two changes,
                        where a change is the insertion, deletion or substitution of a single character, or
                        transposition of two adjacent characters.
                    </p>
                    <p>
                        The default edit distance is 2, but an edit distance of 1 should be sufficient to catch 80%
                        of all human misspellings. It can be specified as:
                    </p>
                    <pre className={classes.codeBlock}>grhc38~1</pre>

                    <Typography id="proximity" component="h4" variant="h5">
                        Proximity Searches
                    </Typography>
                    <p>
                        While a phrase query (eg john smith) expects all of the terms in exactly the same order, a
                        proximity query allows the specified words to be further apart or in a different order. In
                        the same way that fuzzy queries can specify a maximum edit distance for characters in a
                        word, a proximity search allows us to specify a maximum edit distance of words in a phrase:
                    </p>
                    <pre className={classes.codeBlock}>"sapiens rnaseq"~5</pre>
                    <p>
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