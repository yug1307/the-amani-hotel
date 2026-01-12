import ReactDOM from 'react-dom/client'; 
import App from './App.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Gallery from './components/Gallery.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>   
      <Route path="/" element={<App />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/gallery" element={<Gallery/>} />
    </Routes>
  </BrowserRouter>
)
