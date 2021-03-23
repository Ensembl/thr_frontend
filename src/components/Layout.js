import React from 'react';
import TopBar from "./TopBar"
import Footer from "./Footer"
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from "@material-ui/core/Box";


function Layout(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar {...props} />
            <div>
                {props.children}
            </div>
            <Box mt={8}>
                <Footer />
            </Box>

        </React.Fragment>
    )
}

export default Layout