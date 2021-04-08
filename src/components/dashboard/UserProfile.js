import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const handleSubmit = (e) => {
    e.preventDefault();
}

const UserProfile = (props) => {
    const classes = useStyles();

    const {userInfo} = props;
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AccountCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Profile
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        disabled
                        id="standard-basic"
                        label="Username"
                        value={userInfo.username || ''}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        disabled
                        id="standard-basic"
                        label="First Name"
                        value={userInfo.first_name || ''}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        disabled
                        id="standard-basic"
                        label="Last Name"
                        value={userInfo.last_name || ''}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="standard-basic"
                        label="Email"
                        value={userInfo.email || ''}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button
                        disabled
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Update
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default UserProfile;

