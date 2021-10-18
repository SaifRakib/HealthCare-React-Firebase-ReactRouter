
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MoreDoctors from './components/MoreDoctors/MoreDoctors';
import Navbar from './components/Navbar/Navbar';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './Context/AuthProvider';



function App() {
  return (
   <>
   <AuthProvider>
        <Router>
                <Navbar></Navbar>
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
   </AuthProvider>
   </>
  
  );
}

export default App;
