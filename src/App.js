import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigations from './components/Navigations';
import Rocket from './components/Rocket';
import Mission from './components/Mission';

function App() {
  return (
    <div>
      <Navigations />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/profile" element={<myProfile />} />
      </Routes>
    </div>
  );
}

export default App;
