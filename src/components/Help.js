import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MainBreadcrumbs from "./generic/MainBreadcrumb";
import {Box, Divider} from "@mui/material";

function Help() {
    return (
        <Container component="main" maxWidth="lg">
            <MainBreadcrumbs item="Help"></MainBreadcrumbs>

            <Box sx={{ marginTop: 5 }}>
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
            </Box>
        </Container>
    );
}

export default Help