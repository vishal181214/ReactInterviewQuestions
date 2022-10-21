import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import Nopage from './Components/Nopage'
import Home from './Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home color="green"/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='*' element={<Nopage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
