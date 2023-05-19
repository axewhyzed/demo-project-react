import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css';
import {Guest} from './components/Guest';
import {User} from './components/User';
import logo from './logo.svg';
import { Grid, Paper } from '@material-ui/core';

const Sample = () => {
  return <h1 style={{fontFamily:"monospace"}}>This is a sample component</h1>
};

function App() {
  const clk = () => alert("I have been clicked!");

  const mclk = () =>alert("Clicked on Material UI button");
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className='App-logo' alt="Logo"/>
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
            <Route path='/' element={<User name="Mihir" muifunc={mclk} func={clk} />} />
            <Route path='/guest' element={<Guest />} />
            <Route path='/sample' element={<Sample />} />
          </Routes>
        </>
      </header>
    </div >
    </BrowserRouter>
  );
}

export default App;
