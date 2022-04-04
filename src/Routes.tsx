import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import UsersSearch from 'pages/UsersSearch';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/usersSearch">
        <UsersSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
