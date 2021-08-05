import Navigation from "./components/Navigation";
import WeatherDetails from "./components/WeatherDetails";
import Form from "./components/Form";

import './styles.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Form />
      <WeatherDetails />
    </div>
  );
}

export default App;
