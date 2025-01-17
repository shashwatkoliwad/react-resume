import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  Toolbar,
  Avatar,
  Paper,
} from "@material-ui/core";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import useStyles from "./styles";
import EditIcon from "@material-ui/icons/Edit";
import Accountcirle from "@material-ui/icons/AccountCircle";
import Dialog from "./dialog";
import CloseIcon from "@material-ui/icons/Close";

import { addCertificate } from '../api'

export default props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    title : '',
    startDate: '',
    endDate: '',
    instituteName: '',
    location: '',
    description: ''

  })

  const handleSubmit = async() => {
    let payload = formData
    let res = await addCertificate(payload)
    if (res) {
      console.log("success")
    }
    setOpen(false)
  }
  return (
    <>
      <Paper className={classes.paper}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Accountcirle />
          </IconButton>
          <Typography className={classes.title}>Certification</Typography>
          <Typography className={classes.pointer} variant="span" onClick={() => setOpen(true)}>+ Add More Certification</Typography>
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
        title="Edit Certification"
        CloseIcon={
          <IconButton edge="start" color="inherit" aria-label="close">
            <CloseIcon onClick={() => setOpen(false)} />
          </IconButton>
        }
        content={
            <Grid container>
              <Grid item xs={4} className={classes.textFieldContainer}>
                <Typography variant="span">* Certification Name</Typography>
                <TextField
                  id="outlined-textarea"
                  placeholder="Placeholder"
                  className={classes.TextFieldTopMargin}
                  multiline
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value = {formData.title}
                  onChange = { (e) =>  setFormData({...formData, title: e.target.value})}
                />
              </Grid>
              <Grid item xs={4} className={classes.textFieldContainer}>
                <Typography>* Start Date</Typography>
                <TextField
                  id="date"
                  type="date"
                  className={classes.textField}
                  value = { formData.startDate}
                  onChange = { (e) => setFormData({ ...formData, startDate: e.target.value })}
                />
              </Grid>
              <Grid item xs={4} className={classes.textFieldContainer}>
                <Typography>* End Date</Typography>
                <TextField
                  id="date"
                  type="date"
                  className={classes.textField}
                  value = { formData.endDate}
                  onChange = { (e) => setFormData({ ...formData, endDate: e.target.value })}
                />
              </Grid>
              <Grid item xs={6} className={classes.textFieldContainer}>
                <Typography>* Institution Name</Typography>
                <TextField
                  id="outlined-textarea"
                  placeholder="Placeholder"
                  multiline
                  fullWidth
                  className={classes.TextFieldTopMargin}
                  value = {formData.instituteName}
                  onChange = { (e)=> setFormData({...formData, instituteName: e.target.value})}
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
                  value = { formData.location}
                  onChange = { (e) => setFormData({...formData, location:e.target.value})}
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
                  value = {formData.description}
                  onChange = {(e) => setFormData({...formData, description: e.target.value })}
                />
              </Grid>
              <Grid item xs className={classes.textFieldContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ float: "right" }}
                  onClick = {()=>  handleSubmit()}
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
