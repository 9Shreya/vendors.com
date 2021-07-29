import "./App.css";
// import { Button } from "react-bootstrap";
import Vendors from "./components/vendors";
import Navbarr from "./components/Navbarr";
import { Route, Switch } from "react-router-dom";
import cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="App">
      <Navbarr />

      <Switch>
        <Route exact path="/" component={Vendors} />
        <Route exact path="/cart" component={cart} />
        <Route
          exact
          path="/productDetail/:productid"
          exact
          component={ProductDetails}
        />
        <Route exact path="/wishlist" component={Wishlist} />
      </Switch>
    </div>
  );
}

export default App;
