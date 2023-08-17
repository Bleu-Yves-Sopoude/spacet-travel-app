import { Route, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
//import Navigations from './components/Navigations';
=======
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navigations from './components/Navigations';
>>>>>>> bc76d372bbb07d341f0fcb69e1d8be82bf43ae9d
import Rocket from './components/Rocket';
import Mission from './components/Mission';
import Profile from './components/myProfile';
import Header from './components/header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
