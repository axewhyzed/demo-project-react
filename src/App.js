import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css';
import {Guest} from './components/Guest';
import {User} from './components/User';
import logo from './logo.svg';

const Sample = () => {
  return <h1>This is a sample component</h1>
};

function App() {
  const clk = () => alert("I have been clicked!");
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className='App-logo' alt="Logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <>
          <NavLink to='/' className="nav-links">Home Component</NavLink>
          <NavLink to='/guest' className="nav-links">User component</NavLink>
          <NavLink to='/sample' className="nav-links">Sample component</NavLink>
          <Routes>
            <Route path='/' element={<User name="Mihir" func={clk} />} />
            <Route path='/guest' element={<Guest />} />
            <Route path='/sample' element={<Sample />} />
          </Routes>
          Learn React
        </>
      </header>
    </div >
    </BrowserRouter>
  );
}

export default App;
