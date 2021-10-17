
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';


function App() {
  return (
   <>
    <Router>
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route exact path="/services/:id">
                <ServiceDetails></ServiceDetails>
            </Route>
           
        </Switch>
    </Router>
   </>
  
  );
}

export default App;
