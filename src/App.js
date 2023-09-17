import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <div className="App">
    <BrowserRouter>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/search" element={<DisplayResults/>} /> */}
        </Routes>
        </div>
    </BrowserRouter>
</div>
  );
}

export default App;
