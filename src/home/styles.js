import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#eee"
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
    color: '#322A6A',
    fontWeight: 'bold'
  },
  experianceTitle: {
    color: "#FFA500",
    fontWeight:'bold'
  },
  projectTitle:{
    color: "#366E94",
    fontWeight: 'bold',
    fontSize: 14
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: 10
  },
  containerClass: {
    padding: "0 10px"
  },
  textJustify: {
    textAlign: "justify"
  },
 

  bottomConnector: {
    marginLeft: 32,
    marginBottom: 0,
    padding: 0
  },
  EditIconLeft: {
    float:'right',
    alignSelf:'end'
  },
  pointer: {
    cursor:'pointer'
  },
  marginAround: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  textFieldContainer: {
   padding:'4px 10px'
  },
  TextFieldTopMargin: {
    marginTop: '6px !important'
  },
  marginLeft: {
    marginLeft:20
  },
  iconText: {
    marginBottom:14
  },
  contentClass: {
    display: 'contents'
  },
  iconButton: {
    padding:0,
    marginLeft:10
  },
  rightText: {
    float:'right',
    color: '#0000008a'
  }
}));
