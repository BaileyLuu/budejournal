import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import FeelingSelector from './FeelingSelector';
import Navbar from './components/Navbar';
import Emoji from './components/Emoji';

// import menu from './menu';

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //     <Route path="/home" element={<Home />}></Route>
    // </Routes>
    // </BrowserRouter>
  //   <div className="App">
  //   <FeelingSelector />
  // </div>
  <div className="App">
  <Navbar />
  <Emoji/>
  {/* Other content of your application */}
</div>
  );
}

export default App;
