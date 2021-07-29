import React from "react";
import { Link } from "react-router-dom";
// import "../App";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PeopleIcon from "@material-ui/icons/People";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../App.css";
import Badge from "@material-ui/core/Badge";
import { useEffect } from "react";
import { getCart, getWishlist } from "./Crud";
import { useState } from "react";

function Navbarr() {
  useEffect(() => {
    valueCall();
  });
  const [lengthCart, setlengthCart] = useState(0);
  const [wish, setwish] = useState(0);
  let valueCall = () => {
    Promise.all([getCart()]).then((result) => {
      console.log(result[0], result[0].data);
      setlengthCart(result[0].data.length);
    });
    Promise.all([getWishlist()]).then((result) => {
      console.log(result[0], result[0].data);
      setwish(result[0].data.length);
    });
  };
  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <PeopleIcon />
            VendorShop
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Badge badgeContent={lengthCart} color="secondary">
              <Link
                to="/cart"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ShoppingCartIcon />
                Cart
              </Link>
            </Badge>
          </Nav.Link>
          <Nav.Link>
            <Badge badgeContent={wish} color="secondary">
              <Link
                to="/wishlist"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FavoriteIcon />
                Wishlist
              </Link>
            </Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
