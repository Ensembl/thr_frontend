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
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
    customLink: {
        color: "inherit",
        textDecoration: "none",
    },
}));

export default function GenomeBrowsersLinks(props) {
    const classes = useStyles();

    const {trackdbBrowserLinks, assemblyAccession, hubUrl} = props

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                View in Genome Browser
                <ArrowDropDownIcon/>
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                { trackdbBrowserLinks &&
                    Object.entries(trackdbBrowserLinks).map(
                        ([genomeBrowserName, genomeBrowserLink]) =>
                            <a href={genomeBrowserLink} target="_blank" rel="noreferrer" className={classes.customLink}>
                                <StyledMenuItem key={genomeBrowserName}>
                                    <ListItemText primary={genomeBrowserName.toUpperCase()}/>
                                </StyledMenuItem>
                            </a>
                    )
                }

                <a href={`https://www.ncbi.nlm.nih.gov/genome/gdv/browser/genome/?acc=${assemblyAccession}&hub=${hubUrl}`}
                   target="_blank" rel="noreferrer" className={classes.customLink}>
                    <StyledMenuItem key='NCBI GDV'>
                        <ListItemText primary='NCBI GDV'/>
                    </StyledMenuItem>
                </a>
            </StyledMenu>
        </div>
    );
}
