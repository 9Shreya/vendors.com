import React, { useEffect, useState } from "react";
import WishlistDisplay from "./WishlistDisplay";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { getWishlist } from "./Crud";
// import MuiAlert from "@material-ui/lab/Alert";

export default function Wishlist() {
  useEffect(() => {
    valueCall();
    console.log("s");
  }, []);
  const [close, setclose] = useState(false);
  const [openCart, setOpenCart] = React.useState(false);
  const [product, setproduct] = useState([]);
  const wishlistErrorClick = () => {
    setclose(true);
  };
  const addCart = () => {
    setOpenCart(true);
  };
  const wishlistErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setclose(false);
  };
  const addCartClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenCart(false);
  };
  function Alert(props) {
    return <MuiAlert elevation={1} {...props} />;
  }

  let valueCall = () => {
    Promise.all([getWishlist()]).then((result) => {
      console.log(result[0], result[0].data);
      setproduct(result[0].data);
    });
  };
  let countProduct = product.length;

  let listOfProducts = product.map((data, index) => {
    return (
      <WishlistDisplay
        key={index}
        data={data}
        valueCall={valueCall}
        addCart={addCart}
        wishlistErrorClick={wishlistErrorClick}
      />
    );
  });

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto wishlistMain">
            <p
              style={{
                padding: "10px 20px",
                fontSize: "17px",
                fontWeight: "500",
              }}
            >
              My Wishlist&nbsp;({countProduct})
            </p>
          </div>
        </div>
      </div>
      <br />
      {listOfProducts}
      {/* <WishlistDisplay /> */}
      <Snackbar
        open={close}
        autoHideDuration={3000}
        onClose={wishlistErrorClose}
      >
        <Alert onClose={wishlistErrorClose} severity="error">
          Removed from your Wishlist!
        </Alert>
      </Snackbar>
      <Snackbar open={openCart} autoHideDuration={3000} onClose={addCartClose}>
        <Alert onClose={addCartClose} severity="success">
          Added to your Cart!
        </Alert>
      </Snackbar>
      <div align="center">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Button
            style={{
              borderRadius: "3px",
              marginTop: "20px",
              backgroundColor: "#3f51b5",
              color: "white",
              width: "20%",
              height: "40px",
              fontWeight: "bolder",
            }}
          >
            Shop now
          </Button>
        </Link>
      </div>
    </div>
  );
}
