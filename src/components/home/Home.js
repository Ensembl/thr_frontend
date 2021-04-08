import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import NestedGrid from "./NestedGrid";
import SearchForm from "./SearchForm";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    main: {
        padding: '2px 4px',
        alignItems: 'center',
        width: '70%',
        margin: 'auto',
        textAlign: "center",
    },
    divider: {
        height: 2,
        margin: 'auto',
        width: 200,
    },
}));

function Home() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <div>
                <div className={classes.main}>
                    <h1>The Track Hub Registry</h1>
                    <h3>A global centralised collection of publicly accessible track hubs</h3>
                    <p>
                        The goal of the Track Hub Registry is to allow third parties to advertise <a
                        href="http://genome.ucsc.edu/goldenPath/help/hgTrackHubHelp.html#Intro" target="_blank">track
                        hubs</a>, and to make it easier for researchers around the world to discover and use track hubs
                        containing different types of genomic research data.
                    </p>
                </div>

                <br/>
                <SearchForm></SearchForm>
                <br/>
                <Divider className={classes.divider} orientation="horizontal"/>
                <br/>
                <NestedGrid></NestedGrid>
            </div>
        </React.Fragment>
    )
}

export default Home