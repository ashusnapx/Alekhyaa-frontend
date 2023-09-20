
import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import GenerateVideo from './Components/GenerateVideo';
import About from './Components/About';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/GenerateVideo" element={<GenerateVideo/>}></Route>
        <Route path="/about" element={<About/>}></Route>

      </Routes>
    </>
  );
}

export default App;
