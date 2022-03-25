import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import MainBreadcrumbs from "./generic/MainBreadcrumb";
import {Divider} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        marginTop: '70px'
    }
});

function Help() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="lg">
            <MainBreadcrumbs item="Help"></MainBreadcrumbs>

            <div className={classes.root}>
                <Typography component="h1" variant="h5">
                    Getting Help and Contacts
                </Typography>
                <Divider/>
                <div>
                    <br/>
                    <Typography component="h3" variant="h6">
                        HelpDesk
                    </Typography>
                    <p>
                        Please contact our <a href="mailto:trackhub-registry@ebi.ac.uk">HelpDesk</a> for any question or
                        problem you might have about using the Trackhub Registry service.
                    </p>
                </div>
            </div>
        </Container>
    );
}

export default Help