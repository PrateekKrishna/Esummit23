import {Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';

import Home from './components/Home';

import Events from './pages/Events';
import Speakers from './pages/Speakers';
import Sponsors from './pages/Sponsors';

function App() {
  return (
    <>
   <Header/>
   
    <Routes>
    <Route exact path='/' element={<Home />} />
    {/* <Route  path='/About' element={<About />} /> */}
    <Route  path='/Events' element={<Events />} />
    <Route  path='/Speakers' element={<Speakers />} />
    <Route  path='/Sponsors' element={<Sponsors />} />
  </Routes>
  </>
  );
}

export default App;
