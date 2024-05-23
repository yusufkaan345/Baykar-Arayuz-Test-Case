import 'bootstrap/dist/css/bootstrap.min.css';
import './screens/LandingPage'
import LandingPage from './screens/LandingPage';
import TheBestScreen from './screens/TheBestScreen';
import WhyJoin from './screens/WhyJoin';

function App() {
  return (
    <div className="App">
     <LandingPage/>
     <TheBestScreen/>
     <WhyJoin/>
    </div>
  );
}

export default App;
