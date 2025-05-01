import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';

function App() {
  
  return (
    <Router basename="/bits_bytes_and_beyond">
      <Routes>
        <Route path="/" element={<div className="dark min-h-screen bg-gray-900 text-gray-100">  <Home /></div>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;