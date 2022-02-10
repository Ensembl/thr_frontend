import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Divider} from "@material-ui/core";
import MainBreadcrumb from "./components/MainBreadcrumb";
import MainBreadcrumbs from "./components/MainBreadcrumb";

const useStyles = makeStyles({
    root: {
        marginTop: '70px'
    },
    wt: {
        position: "relative",
        top: "-20px"
    }
});

function About() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="lg">
            <MainBreadcrumbs item="About"></MainBreadcrumbs>

            <div className={classes.root}>
                <Typography component="h1" variant="h5">
                    About the Track Hub Registry
                </Typography>
                <Divider/>
                <div>
                    <p>Due to their size, efficient integration of large external data sources into genome browsers is a
                        long-standing challenge, which has recently grown in complexity in parallel with the growth of
                        NGS and other high throughput technologies, as well as the rapid evolution from one to many
                        reference genomes. For more than a decade, the Distributed Annotation System (DAS) has been the
                        workhorse for integration of external data sources into genome browsers. However, DAS was not
                        developed to serve data for very high feature densities, querying large feature-rich genomic
                        regions, or providing fast zooming functionality.</p>

                    <p>The UCSC Genome Bioinformatics group has recently developed the more efficient track hub
                        technology and indexed BigBed, BigWig files. Track data hubs represent a way to collate related
                        data sets through a single attachable URL for presentation as a single entity. These data sets
                        are provided in binary indexed file formats (e.g. bigBed, bigWig, BAM, VCF) supporting both
                        partial downloads and caching, significantly improving performancs over DAS. They can be hosted
                        on a simple HTTP or FTP server reducing the cost of setup and maintenance. Track data hubs
                        provides an efficient mechanism for visualising remotely hosted Internet-accessible collections
                        of genome annotations on genome browsers.</p>

                    <p>The track hub specification is provided <a
                        href="http://genome.ucsc.edu/goldenPath/help/hgTrackHubHelp.html#Setup" target="_blank">here</a>.
                    </p>

                    <p>Both UCSC and Ensembl have developed initial support for this technology, but there are still
                        limitations for many users, and Ensembl's support has remained incomplete so far. Integration of
                        track hubs into the Ensembl and UCSC genome browsers involved the copy-paste of a known URL.
                        Discovery is based on word of mouth or the provision of <a
                            href="http://genome.ucsc.edu/cgi-bin/hgHubConnect" target="_blank">manually curated portal
                            pages</a> hosted by the genome browsers. We believe this system is unmaintainable, as the
                        current growth in data volume in bioinformatics applies not only to the size and density of
                        datasets, but also to their number. The number of public track hubs is increasing, largely
                        because of the explosion of next generation sequencing data. Better interfaces are thus required
                        for users to effectively explore available data sources and find those relevant for their
                        research.</p>

                    <p>The Track Hub Registry is designed to overcome these challenges. It is conceived as a centralised
                        repository for registering and discovering publicly accessible track data hubs, to allow third
                        parties willing to share their data to advertise their services, and to make it easier for
                        researchers around the workd to discover and use hubs containing different types of genomic
                        research data. The Registry provides an intuitive and easy to use search interface, and RESTful
                        APIs for registering and searching track hubs, checking if a track hub is still available and
                        obtain information which can be used by genome browsers to build convenient interfaces.</p>

                    <h3>Funding</h3>
                    <p>
                        The Track Hub Registry is supported by funding from the BBSRC (<a target="_blank"
                                                                                          href="http://gtr.rcuk.ac.uk/project/EE7F1556-743E-4209-905D-84FAF566E3E7"><strong>ProteoGenomics:
                        Dynamic Linkage of Genomes and Proteomes through Ensembl and ProteomeXchange</strong></a>;
                        BB/L024225/1), the Wellcome Trust (WT095908 and WT098051) and the European Molecular Biology
                        Laboratory.
                    </p>
                    <img src={require("./static/img/bbsrc_logo.png").default}/>
                    <img src={require("./static/img/wt_logo.png").default} className={classes.wt}/>
                    <img src={require("./static/img/EMBL_logo.png").default}/>
                </div>
            </div>
        </Container>
    );
}

export default About