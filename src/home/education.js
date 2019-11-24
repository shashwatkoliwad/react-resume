import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  Toolbar,
  Avatar,
  Paper
} from "@material-ui/core";

import useStyles from "./styles";
import CloseIcon from "@material-ui/icons/Close";

import EditIcon from "@material-ui/icons/Edit";
import Accountcirle from "@material-ui/icons/AccountCircle";
import Dialog from "./dialog";

import School from "@material-ui/icons/School";

export default props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Paper className={classes.paper}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <School />
          </IconButton>
          <Typography className={classes.title}>Education</Typography>
          <Typography variant="span" onClick={() => setOpen(true)}  className={classes.pointer}>
            + Add More Education
          </Typography>
        </Toolbar>
        <hr />
        <Typography className={classes.textJustify}>
          kjssmlms sljsm sms kms kmo;s smo;ls jsliks kjssmlms sljsm sms kms
          kmo;s smo;ls jsliks kjssmlms sljsm sms kms kmo;s smo;ls jsliks
          kjssmlms sljsm sms kms kmo;s smo;ls jsliks kjssmlms sljsm sms kms
          kmo;s smo;ls jsliks kjssmlms sljsm sms kms kmo;s smo;ls jsliks
        </Typography>
      </Paper>
      <Dialog
        open={open}
        title="Edit Education"
        CloseIcon={
          <IconButton edge="start" color="inherit" aria-label="close">
            <CloseIcon onClick={() => setOpen(false)} />
          </IconButton>
        }
        content={
          <Grid container>
            <Grid item xs={6} className={classes.textFieldContainer}>
              <Typography variant="span">* Degree</Typography>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                className={classes.TextFieldTopMargin}
                multiline
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3} className={classes.textFieldContainer}>
              <Typography>* Start Date</Typography>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                className={classes.TextFieldTopMargin}

                multiline
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3} className={classes.textFieldContainer}>
              <Typography>* End Date</Typography>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                className={classes.TextFieldTopMargin}

                multiline
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} className={classes.textFieldContainer}>
              <Typography>* School/Institute Name</Typography>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                multiline
                fullWidth
                className={classes.TextFieldTopMargin}
                
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} className={classes.textFieldContainer}>
              <Typography>* Location</Typography>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                multiline
                className={classes.TextFieldTopMargin}

                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} className={classes.textFieldContainer}>
              <Typography>* Description</Typography>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                multiline
                fullWidth
                className={classes.TextFieldTopMargin}
                rows="6"
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs className={classes.textFieldContainer}>
              <Button
                variant="contained"
                color="primary"
                style={{ float: "right" }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        }
      />
    </>
  );
};
