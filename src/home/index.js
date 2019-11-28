import React from "react";
import {
  Grid,
  AppBar,
  Typography,
  Button,
  IconButton,
  Toolbar,
  Avatar,
  Paper,
} from "@material-ui/core";
import Education from "./education";
import useStyles from "./styles";
import EditIcon from "@material-ui/icons/Edit";
import Call from "@material-ui/icons/Call";
import MyLocation from "@material-ui/icons/MyLocation";
import Email from "@material-ui/icons/Email";
import Experiance from "./experience";
import Certification from "./certifications";
import Events from "./Events";
import Profileoverview from "./profileoverview";
import Heighlights from "./highlights";

export default props => {

  // const []
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA4CAMAAACPFEe1AAAAAXNSR0IB2cksfwAAAvRQTFRFAAAA/////urq+5ud/5+f//////////////Hx/Jqc/Jqc/Jmc/////////////Jqd/5mZ/////////////Jqc+5qc/5mZ//////////////Hy/Jqc/////////Zqb////////////////////////////////xKr9lGX6qm/l7pKo8e78////39H+lmj5k2P6lGP6unfX9Zai////5Nz47+n+nnT7lWT4zIHH////5Nv4+PX/tpb8mWb114e8////////ybL8lGT6nG/6up37wKb7v6f3////////3s/9l2n6lWb6sZH6wKb6wKb6waf7v5//////////6+T9pHv7k2P6qoX6wKb6v6b5////////////7eb8mG7vj1/4nnT6vaL6v6b6/////////////////////////////////Pr+p4TxjFv1lmj6wab6////////////08L4iFfxlGT7rYv6////r5Hrcjvlj174onn6////////////sZXqUBLQWBzVekXq////YSbbh1Ty////////////////r5TpaTDgj173////dULe2cr8/Pb69JyoxqXy////////////////1cP8/f3///39/Jqc5p6+wab4////////0L37+/n/+pqe1qLYjmPj+fb///399pqmxqXxaTPXw67v1qLXZS7WvKXt/fz+1qLX////rpHpXybUtJrryrH75o6w5t34+vj+zbf9lmf5rnHh9paiz7v9l2j5yX/K/Jqc39H+nHD6mGX23Ym4zrv4lmn3mmv6xKX00r/5kmT0lmf61sT6lGf03M37lmn1rpDrsJTpfkrti1n1lGX6bTbiwKb6v6f7v6b6wKb6/uDg6ZKneTLFUBLQv6X5/u7u/KWn5YijbinHUBLQv6X6//n5/bKy24CnZCLL//f3/MPFz3aqlV/a/5mZ/Jqc/Jqc/Zqc/Jub/5ub+5qc+5qc/Jqc/56e+5qc/Jqb/Jqb/Jqd/4CAv6X6/5eX/Jqc12VJhgAAAPx0Uk5TAFetgggzyP/G/99QHKX+uCMLhPb5hgoBY+fGvj/QzSWxD5D6BG/tzvHL8kna2Ob/8Mr7GN/m1uTRruT0vdu7R/3B8MPjryAJ49DY2c//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"
            alt="name"
            height="30px"
            width="90px"
          />
          <Typography className={classes.title}></Typography>
          <Button color="inherit">Share</Button>
          <Button color="inherit">Download Resume</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.containerClass}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid style={{ display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src="https://wallpapercave.com/wp/OF3Zstl.jpg"
                className={classes.bigAvatar}
              />
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                className={classes.EditIconLeft}
              >
                <EditIcon />
              </IconButton>
            </Grid>
            <hr />
            <Grid container>
              <Grid className={[classes.contentClass,classes.TextFieldTopMargin].join(" ")}>
                <Email />
                <Typography 
                  variant="span" 
                  className={classes.marginLeft}
                  value = {'lol' }
                  />
                  
              </Grid>
            </Grid>
            <Grid container>
              <Grid className={[classes.contentClass,classes.TextFieldTopMargin].join(" ")}>
                <Call />
                <Typography 
                  variant="span" 
                  className={classes.marginLeft}
                  value = {'lol'}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid className={[classes.contentClass,classes.TextFieldTopMargin].join(" ")}>
                <MyLocation />
                <Typography 
                  variant="span" 
                  className={classes.marginLeft}
                  value = {'lol'} 
                />
                  
              </Grid>
            </Grid>
          </Paper>
          <Heighlights />
        </Grid>
        <Grid item xs={8}>
          <Profileoverview />
          <Experiance />

          <Education />
          <Certification />
          <Events />
        </Grid>
      </Grid>
    </div>
  );
};
