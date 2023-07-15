import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Beranda from './pages/Beranda';
import Profil from './pages/Profil';
import Program from './pages/Program';
import Partnerships from './pages/Partnerships';
import Toefl from './pages/Toefl'; 
import Notfound from './pages/Notfound';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/program" element={<Program />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/About-Toefl" element={<Toefl />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  )
}

export default App;
