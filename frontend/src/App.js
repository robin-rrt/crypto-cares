import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/index';
import Donate from './Pages/Donate';
import CreateService from './Pages/CreateService';
import MyServices from './Pages/MyServices';
import Redeem from './Pages/Redeem';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/donate' exact component={Donate} />
        <Route path='/create-service' exact component={CreateService} />
        <Route path='/my-services' exact component={MyServices} />
        <Route path='/redeem' exact component={Redeem} />
      </Switch>
    </Router>
  );
}

export default App;
