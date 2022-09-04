import './App.css';
import SkaleHome from './pages/SkaleHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RezultatiGlasanja from './pages/RezultatiGlasanja';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SkaleHome />} />
          <Route path="rezultati" element={<RezultatiGlasanja />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
