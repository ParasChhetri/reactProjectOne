import './App.css';
import { Fragment } from 'react';
import Navbar from './components/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import FooterComp from './components/Footer/FooterComp';
import PopyePage from './read more pages/popye/PopyePage';


function App() {
  return (
    <Fragment>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/services' element={<ServicesPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/popye' element={<PopyePage />}/>
        </Routes>
        <FooterComp />
      </div>
    </Fragment>
  );
}

export default App;