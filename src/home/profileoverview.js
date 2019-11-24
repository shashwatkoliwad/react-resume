import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  Toolbar,
  Paper,
  Slide
} from "@material-ui/core";

import useStyles from "./styles";
import EditIcon from "@material-ui/icons/Edit";
import Accountcirle from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "./dialog";
import { profileOverviewUpdate } from '../api'

export default props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [overView, setOverView] = useState('')

  const handleSave = async() => {
    const payload = {
      profileOverview : overView
    }
    let res = await profileOverviewUpdate(payload)
    if (res) {

    }
  }
  return (
    <>
      <Paper className={classes.paper}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Accountcirle />
          </IconButton>
          <Typography className={classes.title}>Profile Overview</Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
            className={classes.pointer}
          >
            <EditIcon />
          </IconButton>
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
        title="Profile Over View"
        CloseIcon={
          <IconButton edge="start" color="inherit" aria-label="close">
            <CloseIcon onClick={() => setOpen(false)} />
          </IconButton>
        }
        content={
          <Grid container>
            <Grid item xs={12} className={classes.marginAround}>
              <Typography>
                * Some Words About You ( Max 500 characters)
              </Typography>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                fullWidth="true"
                multiline
                rows="4"
                margin="normal"
                variant="outlined"
                value = {overView}
                onChange = { (e) => setOverView(e.target.value)}
              />
              <Button 
                variant="contained" 
                color="primary" 
                style={{float:'right'}}
                onClick = {()=> handleSave()}
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
