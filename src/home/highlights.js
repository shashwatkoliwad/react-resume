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
import EditIcon from "@material-ui/icons/Edit";
import Dialog from "./dialog";

export default props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <>
    <Paper className={classes.paper}>
            <Toolbar>
              <Typography className={classes.title}>
                Heighlights
              </Typography>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
                <EditIcon />
              </IconButton>
            </Toolbar>
            <hr />
            <Button variant="contained" className={[classes.marginLeft,classes.TextFieldTopMargin].join(" ")}>React</Button>
            <Button variant="contained" className={[classes.marginLeft,classes.TextFieldTopMargin].join(" ")}>Vue</Button>
            <Button variant="contained" className={[classes.marginLeft,classes.TextFieldTopMargin].join(" ")}>Angular</Button>
            <br />
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
            <Grid item xs={12} className={classes.marginAround}>
              <Typography>
               * Please add the top highlights of your profile. For eg. React Ninja, Amazon, Software Architect, etc.(Add highlights by pressing Enter)
              </Typography>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                fullWidth="true"
                multiline
                margin="normal"
                variant="outlined"
                value = {}
              />
              <Button 
                variant="contained" 
                color="primary" 
                style={{float:'right'}}>
                  Save
              </Button>
            </Grid>
          </Grid>
        }
      />
    </>
  );
};
