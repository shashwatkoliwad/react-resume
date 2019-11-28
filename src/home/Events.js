import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  Toolbar,
  Paper
} from "@material-ui/core";

import useStyles from "./styles";
import CloseIcon from "@material-ui/icons/Close";

import Accountcirle from "@material-ui/icons/AccountCircle";
import Dialog from "./dialog";

export default props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Paper className={classes.paper}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Accountcirle />
          </IconButton>
          <Typography className={classes.title}>
            Avards, Events And Publications
          </Typography>
          <Typography variant="span" onClick={() => setOpen(true)} className={classes.pointer}>
            + Add More Events
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
        title="Edit Events"
        CloseIcon={
          <IconButton edge="start" color="inherit" aria-label="close">
            <CloseIcon onClick={() => setOpen(false)} />
          </IconButton>
        }
        content={
          <Grid container>
            <Grid item xs={4} className={classes.textFieldContainer}>
              <Typography variant="span">Institute Name</Typography>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                className={classes.TextFieldTopMargin}
                multiline
                fullWidth
                margin="normal"
                variant="outlined"
                value = {FormData.}
              />
            </Grid>
            <Grid item xs={4} className={classes.textFieldContainer}>
              <Typography>Award/Event/Publication Name</Typography>
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
            <Grid item xs={4} className={classes.textFieldContainer}>
              <Typography>Date of Award/Event/Publication</Typography>
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
            <Grid item xs={12} className={classes.textFieldContainer}>
              <Typography>* Description</Typography>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                multiline
                fullWidth
                rows="6"
                className={classes.TextFieldTopMargin}
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
