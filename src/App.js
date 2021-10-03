import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";

import NoMatch from "./Components/NoMatch/NoMatch";
import Order from "./Components/Order/Order";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/orderReview">
            <Order></Order>
          </Route>
          <Route path="/*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
