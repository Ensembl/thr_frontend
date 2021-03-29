import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const UserProfile = (props) => {
    const classes = useStyles();

    const {userInfo} = props;
    // if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    return (
        <Container component="main" maxWidth="lg">
            <Typography component="h1" variant="h5">
                User Info
            </Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField disabled id="standard-basic" label="Username" value={userInfo.username || ''}/><br/>
                <TextField disabled id="standard-basic" label="First Name" value={userInfo.first_name || ''}/><br/>
                <TextField disabled id="standard-basic" label="Last Name" value={userInfo.last_name || ''}/><br/>
                <TextField id="standard-basic" label="Email" value={userInfo.email || ''}/>
            </form>
        </Container>
    );
};

export default UserProfile;

