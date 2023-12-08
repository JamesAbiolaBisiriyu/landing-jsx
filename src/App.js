import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Carousel from './components/carousel/Carousel';
import Info from './components/info/Info';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Team from './components/team/Team';
import Footer from './footer/Footer';

function App() {
  return (
<div>
  
  <NavBar/>
  
  <Carousel/>

<Info/>
<Services/>
<Portfolio/>
<Team/>
<Footer/>
</div>
   
  );
}

export default App;
