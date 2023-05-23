import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css';
import Guest from './components/Guest';
import User from './components/User';
import logo from './logo.svg';
import { Grid, Paper, ThemeProvider, createTheme } from '@material-ui/core';

const Sample = () => {
  return <h1 style={{ fontFamily: "monospace" }}>This is a sample component</h1>
};

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2"
    },
    secondary: {
      main: "#dc004e"
    },
  },
  typography: {
    h1: {
      fontSize: 32
    },
    fontFamily:[
      "Impact"
    ]
  },
});

function App() {
  const clk = () => alert("I have been clicked!");

  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className='App-logo' alt="Logo" />
            <p>
              A React Application
            </p>

            <>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Paper elevation={3}><NavLink to='/' className="nav-links">Home Component</NavLink>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={3}><NavLink to='/guest' className="nav-links">User component</NavLink>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={3}><NavLink to='/sample' className="nav-links">Sample component</NavLink>
                  </Paper>
                </Grid>
              </Grid>
              <Routes>
                <Route path='/' element={<User name="Mihir" func={clk} />} />
                <Route path='/guest' element={<Guest />} />
                <Route path='/sample' element={<Sample />} />
              </Routes>
            </>

          </header>
        </div >
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
