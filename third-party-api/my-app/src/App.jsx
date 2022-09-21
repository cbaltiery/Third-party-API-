import './App.css';
import Weather from './components/Weather';
import Restaurant from './components/Restaurant';
import Map from './components/Map';
import CurrentLocation from './components/CurrentLocation';


function App() {
  return (
<>
<CurrentLocation/>
<Weather/>
<Restaurant/>
<Map/>
</>
  );
}

export default App;
