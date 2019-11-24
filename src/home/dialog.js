import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding:'30px 10px'
  },
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddDialog(props) {
  const classes = useStyles();
  //   const [open, setOpen] = React.useState();

  return (
    <div>
      <Dialog fullScreen open={props.open} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            {props.CloseIcon}
            <Typography variant="h6" className={classes.title}>
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>{props.content}</div>
      </Dialog>
    </div>
  );
}

AddDialog.defaultProps = {
  open: false
};
