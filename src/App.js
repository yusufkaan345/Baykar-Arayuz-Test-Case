import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './screens/LandingPage';
import TheBestScreen from './screens/TheBestScreen';
import WhyJoin from './screens/WhyJoin';
import Footer from './screens/Footer';
import GrowScreen from './screens/GrowScreen';
import CarouselScreen from './screens/CarouselScreen';

function App() {
  return (
    <div className="App">
     <LandingPage/>
     <TheBestScreen/>
     <WhyJoin/>
     <CarouselScreen/>
     <GrowScreen/>
     <Footer/>
    </div>
  );
}

export default App;
