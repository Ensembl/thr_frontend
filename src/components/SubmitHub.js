import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";


function SubmitHub() {
    return (
        <div>
            <Container component="main" maxWidth="lg">
                <Typography component="h1" variant="h5">
                    Submit/Update Hub
                </Typography>
                <div>
                    <div>
                        <p>
                            As you are registered with the system, you can start using the <a
                            href="#">Registration API</a>, which allows you to
                            use <a href="#">RESTful workflows</a> to
                            manage your track data hubs with the Registry.
                        </p>
                        <p>
                            Using this API, you can:
                            <ul>
                                <li><a href="#">register
                                    track data hubs</a> with the registry;
                                </li>
                                <li><a href="#">list</a> the all
                                    your registered track hubs or data bases;
                                </li>
                                <li><a
                                    href="#">get/update/delete</a> a
                                    given track hub in the registry
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default SubmitHub