import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Selects from './components/Selects';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Navbar/>
     <Background/>
     <Destinations/>
     <Search/>
     <Selects/>
  <Slider/>
  <Footer/>
     </>
  
  );
}

export default App;
