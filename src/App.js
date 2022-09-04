import './App.css';
import SkaleHome from './pages/SkaleHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SkaleHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
