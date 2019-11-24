import React from 'react';
import SignIn from './login'
import Home from './home'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core"
import { BrowserRouter as Router, Route } from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00bceb",
      contrastText: "#fff"
    }
  },
  overrides: {
    MuiTypography: {
      body2: {
        color: '#58585b'
      }
    }
  }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component = {SignIn} />
        <Route path="/home" component = {Home }/>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;