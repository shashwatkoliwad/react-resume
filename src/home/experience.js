import React from "react";
import {
  Grid,
  Typography,
  Button,
  IconButton,
  Toolbar,
  TextField,
  Paper,
  Step,
  StepLabel,
  Stepper,
  StepContent
} from "@material-ui/core";

import useStyles from "./styles";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import MyLocation from "@material-ui/icons/MyLocation";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import Work from "@material-ui/icons/Work";
import Dialog from "./dialog";
import ProjectDialog from "./dialog";
import { addExperience } from '../api'

export default props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [addProject, setAddProject] = React.useState(false);
  const [formData, setFormData] = React.useState()

  const handleSave = async() => {
    let res = await addExperience(formData)
    if (res) {

    }
  }

  const steps = [
    {
      pro: "Senior Full Stack Developer",
      description: "bsbsbs"
    },
    {
      pro: "gsggsgsg",
      description: "bsbsbs"
    }
  ];
  return (
    <>
      <Paper className={classes.paper}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Work />
          </IconButton>
          <Typography className={classes.title}>
            Experiance And Projects
          </Typography>
          <Typography
            variant="span"
            onClick={() => setOpen(true)}
            className={classes.pointer}
          >
            + Add More Experiance
          </Typography>
        </Toolbar>
        <hr />
        <Typography className={classes.textJustify}>
          <Stepper activeStep="true" orientation="vertical">
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>
                  <Typography
                    variant="span"
                    className={classes.experianceTitle}
                  >
                    12{label.pro}
                  </Typography>
                  <Grid style={{ float: "right" }}>
                    <Typography variant="span">Feb 2019 - june 2020</Typography>
                    <IconButton
                      edge="start"
                      color="inherit"
                      className={classes.iconButton}
                    >
                      <EditIcon />
                    </IconButton>
                  </Grid>
                </StepLabel>
                <StepContent last={false} active={true}>
                  <Grid>
                    <Grid container>
                      <Grid item className={classes.contentClass}>
                        <ViewQuilt />
                        <Typography variant="span" className={classes.iconText}>
                          Rocket Software
                        </Typography>
                      </Grid>
                      <Grid item className={classes.contentClass}>
                        <MyLocation className={classes.marginLeft} />
                        <Typography variant="span" className={classes.iconText}>
                          Pune
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography>
                      Worked on storageenterprises product for creating user
                      experiance.
                    </Typography>

                    <Grid>
                      <br />
                      <br />
                      <Typography variant="span">Projects</Typography>
                      <Typography
                        variant="span"
                        onClick={() => setAddProject(true)}
                        className={[classes.pointer, classes.rightText].join(
                          " "
                        )}
                      >
                        + Add More Projects
                      </Typography>
                      <hr />
                      <Stepper activeStep="true" orientation="vertical">
                        {steps.map((label, index) => (
                          <Step key={index}>
                            <StepLabel>
                              <Typography variant="span" className={classes.projectTitle}>
                                {label.pro}
                              </Typography>
                              <Grid style={{ float: "right" }}>
                                <IconButton
                                  edge="start"
                                  color="inherit"
                                  className={classes.iconButton}
                                >
                                  <EditIcon />
                                </IconButton>
                              </Grid>
                            </StepLabel>
                            <StepContent last={false} active={true}>
                              <Grid>
                                <Typography>
                                  Worked on storageenterprises product for
                                  creating user experiance.
                                </Typography>
                              </Grid>
                            </StepContent>
                          </Step>
                        ))}
                      </Stepper>
                    </Grid>
                  </Grid>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Typography>
      </Paper>
      <Dialog
        open={open}
        title="Add Experiance"
        CloseIcon={
          <IconButton edge="start" color="inherit" aria-label="close">
            <CloseIcon onClick={() => setOpen(false)} />
          </IconButton>
        }
        content={
          <Grid container>
            <Grid item xs={6} className={classes.textFieldContainer}>
              <Typography variant="span">* Title</Typography>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                className={classes.TextFieldTopMargin}
                multiline
                fullWidth
                margin="normal"
                variant="outlined"
                value = { FormData.title }
                onChange = { (e) => setFormData({...FormData, title: e.target.value})}
              />
            </Grid>
            <Grid item xs={6} className={classes.textFieldContainer}>
              <Typography>* Company Name</Typography>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                className={classes.TextFieldTopMargin}
                multiline
                fullWidth
                margin="normal"
                variant="outlined"
                value = { FormData.companyName}
                onChange = { (e) => setFormData({ ...FormData, companyName:e.target.value})}
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
                value = { FormData.startDate}
                onChange = { (e) => setFormData({ ...FormData, startDate:e.target.value})}
              />
            </Grid>
            <Grid item xs={3} className={classes.textFieldContainer}>
              <Typography>* End Date</Typography>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                multiline
                fullWidth
                className={classes.TextFieldTopMargin}
                margin="normal"
                variant="outlined"
                value = { FormData.endDate}
                onChange = { (e) => setFormData({ ...FormData, endDate:e.target.value})}
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
                value = { FormData.location}
                onChange = { (e) => setFormData({ ...FormData, location:e.target.value})}
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
                value = { FormData.description}
                onChange = { (e) => setFormData({ ...FormData, description:e.target.value})}
              />
            </Grid>
            <Grid item xs={12} className={classes.textFieldContainer}>
              <div
                onClick={() => setAddProject(true)}
                style={{
                  minWidth: "160px",
                  border: "1px dotted blue",
                  maxWidth: "349px",
                  minHeight: "150px",
                  textAlign: "center",
                  cursor: "pointer"
                }}
              >
                <Typography style={{ margin: "60px auto" }}>
                  Add project
                </Typography>
              </div>
            </Grid>
            <Grid item xs className={classes.textFieldContainer}>
              <Button
                variant="contained"
                color="primary"
                style={{ float: "right" }}
                onClick = { ()=> handleSave()}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        }
      />
      <ProjectDialog
        open={addProject}
        title="Add Project"
        CloseIcon={
          <IconButton edge="start" color="inherit" aria-label="close">
            <CloseIcon onClick={() => setAddProject(false)} />
          </IconButton>
        }
        content={
          <Grid container>
            <Grid item xs={12} className={classes.textFieldContainer}>
              <Typography variant="span">* Project Name</Typography>
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
              <Typography>* Skills</Typography>
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
              <Typography>* App Link</Typography>
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
              <Typography>* Start Date</Typography>
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
                rows="8"
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
