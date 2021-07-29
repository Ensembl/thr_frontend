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
import ReactDOM from 'react-dom'
import {render, fireEvent} from '@testing-library/react'
import withMarkup from '../../withMarkup'

import TrackHubPanels from './TrackHubPanels';
import parse from 'html-react-parser';


describe('TrackHubPanels tests', () => {
    it('should render the correct content', () => {
        const trackDbInfo = {
            "owner": "usr",
            "file_type": {
                "bigBed": 2
            },
            "created": "2021-06-29 09:52:07",
            "updated": "2021-06-29 09:52:07",
            "version": "v1.0",
            "type": "genomics",
            "source": {
                "checksum": null,
                "url": "file:////Users/bilal/git/thr/samples/JASPAR_TFBS/hg38/trackDb.txt"
            },
            "hub": {
                "name": "JASPAR_TFBS",
                "short_label": "JASPAR TFBS",
                "long_label": "TFBS predictions for profiles in the JASPAR CORE collections",
                "url": "file:////Users/bilal/git/thr/samples/JASPAR_TFBS/hub.txt"
            },
            "browser_links": {
                "ucsc": "http://genome.ucsc.edu/cgi-bin/hgHubConnect?db=hg38&hubUrl=file:////Users/bilal/git/thr/samples/JASPAR_TFBS/hub.txt&hgHub_do_redirect=on&hgHubConnect.remakeTrackHub=on",
                "biodalliance": "/biodalliance/view?assembly=hg38&name=JASPAR TFBS&url=file:////Users/bilal/git/thr/samples/JASPAR_TFBS/hub.txt",
                "ensembl": "http://www.ensembl.org/TrackHub?url=file:////Users/bilal/git/thr/samples/JASPAR_TFBS/hub.txt;species=Homo_sapiens;name=JASPAR%20TFBS;registry=1",
                "vectorbase": "https://www.vectorbase.org/TrackHub?url=file:////Users/bilal/git/thr/samples/JASPAR_TFBS/hub.txt;species=Homo_sapiens;name=JASPAR%20TFBS;registry=1"
            },
            "species": {
                "scientific_name": "Homo sapiens",
                "common_name": null,
                "taxon_id": 9606
            },
            "assembly": {
                "name": "GRCh38",
                "accession": "GCA_000001405.15",
                "ucsc_synonym": "hg38"
            },
            "status": {
                "tracks": {
                    "total": 16,
                    "with_data": {
                        "total": 0,
                        "total_ko": 0
                    }
                },
                "message": "All is Well",
                "last_update": 1625169971
            }
        }

        const {getByText, getAllByText} = render(<TrackHubPanels trackDbInfo={trackDbInfo}/>);
        getByText('General Info')
        getByText(trackDbInfo.status.message)
        getByText(trackDbInfo.status.tracks.with_data.total)
        getByText(trackDbInfo.type)
        getByText(trackDbInfo.assembly.accession)
        const ViewLinks = getAllByText('View');
        const TrackdbViewLink = ViewLinks[0]
        expect(TrackdbViewLink.closest('a')).toHaveAttribute(
            'href',
            `${trackDbInfo.source.url}`
        )

        getByText('Hub')
        getByText(trackDbInfo.hub.name)
        getByText(trackDbInfo.hub.short_label)
        getByText(parse(`${trackDbInfo.hub.long_label}`))
        getByText(trackDbInfo.assembly.accession)
        const HubViewLink = ViewLinks[1]
        expect(HubViewLink.closest('a')).toHaveAttribute(
            'href',
            `${trackDbInfo.hub.url}`
        )

        getByText('Species')
        getByText(trackDbInfo.species.taxon_id)
        getByText(trackDbInfo.species.scientific_name)
        getByText(trackDbInfo.assembly.ucsc_synonym)
    });
})

