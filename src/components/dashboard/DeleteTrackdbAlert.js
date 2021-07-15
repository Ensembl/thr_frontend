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

import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from "@material-ui/icons/Delete";
import * as settings from "../../settings";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";


export default function DeleteTrackdbAlert({trackdbId}) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const handleYes = () => {
        let user = JSON.parse(localStorage.getItem('user'));
        const apiUrlDeleteTrackdb = `${settings.API_SERVER}/api/trackdb/${trackdbId}`;

        axios.delete(apiUrlDeleteTrackdb, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${user.token}`
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
            <Button onClick={handleClickOpen}>
                <DeleteIcon style={{ color: 'red' }}></DeleteIcon>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete this trackdb?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleYes} style={{ color: 'red' }}>
                        Yes
                    </Button>
                    <Button onClick={handleClose} color="default" autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
