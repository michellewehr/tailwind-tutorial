import logo from './logo.svg';
import './App.css';
import Events from './Pages/Events';
import Events2 from './Pages/Events2';
import Nav from './components/Nav';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <div>
        <Nav/>
        {/* <Events/> */}
        {/* <Login/> */}
        <Signup/>
        </div>
  );
}

export default App;
