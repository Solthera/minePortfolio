import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import LatestWork from './components/Latestwork.jsx';
import Home from './App.jsx'
import Mycv from './components/cv/Mycv.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/Latestwork' element={<LatestWork />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Mycv' element={<Mycv />} />
    </Routes>
  </BrowserRouter>
);
