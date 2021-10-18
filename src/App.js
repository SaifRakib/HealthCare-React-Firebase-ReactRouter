
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MoreDoctors from './components/MoreDoctors/MoreDoctors';
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
            <Route path="/doctors">
                <MoreDoctors></MoreDoctors>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
           
        </Switch>
    </Router>
   </>
  
  );
}

export default App;
