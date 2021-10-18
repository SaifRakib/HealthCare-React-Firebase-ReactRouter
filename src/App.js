
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MoreDoctors from './components/MoreDoctors/MoreDoctors';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/Newsletter/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Registration/Register';
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
                    <PrivateRoute path="/about">
                        <About></About>
                    </PrivateRoute>
                    <PrivateRoute path="/doctors">
                        <MoreDoctors></MoreDoctors>
                    </PrivateRoute>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
   </AuthProvider>
   </>
  
  );
}

export default App;
