import * as React from 'react';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
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
))(({theme}) => ({
    '& .MuiPaper-root': {
        borderRadius: 2,
        minWidth: 220,
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            color: theme.palette.common.black,
        },
    },
}));

const styles = {
    customLink: {
        color: "inherit",
        textDecoration: "none",
    },
};

export default function
    GenomeBrowsersLinks(props) {

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
                id="customized-button"
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
                MenuListProps={{
                    'aria-labelledby': 'customized-button',
                }}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {trackdbBrowserLinks &&
                Object.entries(trackdbBrowserLinks).map(
                    ([genomeBrowserName, genomeBrowserLink]) =>
                        <a key={genomeBrowserName} href={genomeBrowserLink} target="_blank" rel="noreferrer" sx={styles.customLink}>
                            <MenuItem>
                                {genomeBrowserName.toUpperCase()}
                            </MenuItem>
                        </a>
                )
                }

                <a href={`https://www.ncbi.nlm.nih.gov/genome/gdv/browser/genome/?acc=${assemblyAccession}&hub=${hubUrl}`}
                   target="_blank" rel="noreferrer" sx={styles.customLink}>
                    <MenuItem key='NCBI GDV'>
                        NCBI GDV
                    </MenuItem>
                </a>
            </StyledMenu>
        </div>
    );
}
