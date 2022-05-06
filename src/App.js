import './App.css';
import { Route, Routes } from 'react-router-dom'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Gallary from './pages/Gallary/Gallary';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Donate from './pages/Donate/Donate';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
