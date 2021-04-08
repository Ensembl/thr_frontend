import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from "@material-ui/icons/Delete";
import * as settings from "../../settings";
import axios from "axios";

// TODO: Check this out
// Remain on same TabPanel after Refresh on React
// https://stackoverflow.com/questions/66717404/remain-on-same-tabpanel-after-refresh-on-react

export default function DeleteTrackdbAlert({trackdbId}) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const handleYes = () => {

        const token = localStorage.getItem('token');
        const apiUrlDeleteTrackdb = `${settings.API_SERVER}/api/trackdb/${trackdbId}`;

        axios.delete(apiUrlDeleteTrackdb, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            }
        )
            .then(response => {
                console.log("Trackdb deleted successfully!")
                handleClose()
                // reload the page
                window.location.reload();
            })
            .catch(err => {
                console.log("An Error Occurred!")
                console.log(err)
            });
    }

    return (
        <div>
            {/*<DeleteIcon onClick={() => handleDeleteTrackdb(trackdb.trackdb_id)}/>*/}
            <Button color="secondary" onClick={handleClickOpen}>
                <DeleteIcon></DeleteIcon>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete this trackdb?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleYes} color="primary">
                        Yes
                    </Button>
                    <Button onClick={handleClose} color="contrast" autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
