import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './components/Home/home'
import Weather from './components/Weather/weather'

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home}></Route>
        <Route path="/weather" component={Weather}></Route>
    </Router>
  );
}

export default App;
