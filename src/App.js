import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartContainer from "./Components/CartContainer/CartContainer";
import NoMatch from "./Components/NoMatch/NoMatch";
import Order from "./Components/Order/Order";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/cart">
            <CartContainer></CartContainer>
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
