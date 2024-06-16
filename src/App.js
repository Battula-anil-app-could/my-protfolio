
import './App.css';
import Home from './components/Home/home';
import Navbar from './components/navbar/navbar';
import MainFooter from './components/Footer/MainFooter';
import AboutMe from './components/Aboutme/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
    <div className='base'>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
      <MainFooter />
    </div>
  );
}

export default App;
