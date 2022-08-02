
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
     
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
