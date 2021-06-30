import logo from './resources/logo.svg';
import './resources/App.css';

import Home from './components/Home';
import Contact from './components/Contact'
import Parent from './components/Parent';
import Garage from './components/Garage'
import Prt from './components/Prt';
import AnimalsHome from './components/AnimalsHome';
import CounterParent from './components/CounterParent';
import SearchParent from './components/SearchParent'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RoutingNav from './components/RoutingNav';
import RoutingFooter from './components/RoutingFooter';
import RoutingHome from './components/RoutingHome';
import RoutingAbout from './components/RoutingAbout';
import RoutingContact from './components/RoutingContact';
import RoutingProduct from './components/RoutingProduct';
import RoutingLocation from './components/RoutingLocation';
import RoutingSchedule from './components/RoutingSchedule';
import RoutingOffers from './components/RoutingOffers';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <Parent /> */}
      {/* <Garage /> */}
      {/* <Prt /> */}
      {/* <AnimalsHome /> */}
      {/* <CounterParent /> */}
      {/* <SearchParent /> */}
      <Router>
        <RoutingNav />

        <Switch>

          <Route path="/" exact>
            <RoutingHome />
          </Route>

          <Route path="/about" exact>
            <RoutingAbout />
          </Route>

          <Route path="/contact" exact>
            <RoutingContact />
          </Route>

          <Route path="/product" exact>
            <RoutingProduct />
          </Route>

          <Route path="/schedule" exact>
            <RoutingSchedule />
          </Route>

          <Route path="/location" exact>
            <RoutingLocation />
          </Route>

          <Route path="/offers" exact>
            <RoutingOffers />
          </Route>

        </Switch>

        <RoutingFooter />
      </Router>
    </div>
  );
}

export default App;
