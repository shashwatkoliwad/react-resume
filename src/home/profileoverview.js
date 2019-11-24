import React from "react";
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

import Work from "@material-ui/icons/Work";
import School from "@material-ui/icons/School";
import Dialog from "./dialog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
              />
              <Button variant="contained" color="primary" style={{float:'right'}}>
                  Save
              </Button>
            </Grid>
          </Grid>
        }
      />
    </>
  );
};
