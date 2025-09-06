import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/aboutus';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={< AboutUs/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
