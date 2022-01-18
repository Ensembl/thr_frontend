import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    codeBlock: {
        display: 'block',
        borderRadius: '5px',
        padding: '10px',
        background: '#eeeeee',
        overflowX: 'scroll',
        minWidth: '100px',
        marginTop: '-10px'
    },
}));

export default function ExampleClientsTabs({exampleClientsCode}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  aria-label="simple tabs example"
            >
                {exampleClientsCode.map((tabInfo, index) => (
                    <Tab
                        label={tabInfo.tabTitle}
                        id={`simple-tab-${index}`}
                        key={tabInfo.tabTitle}
                        ariaControls={`simple-tabpanel-${index}`}
                    />
                ))}
            </Tabs>
            {exampleClientsCode.map((tabInfo, index) => (
                <TabPanel value={value} index={index}>
                    <pre className={classes.codeBlock}>
                        {tabInfo.tabContent}
                    </pre>
                </TabPanel>
            ))}
        </div>
    );
}
