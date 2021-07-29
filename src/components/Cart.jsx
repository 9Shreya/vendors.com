import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import AddCartDisplay from "./AddCartDisplay";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";
import { getCart } from "./Crud";
export default function Cart() {
  function Alert(props) {
    return <MuiAlert elevation={1} {...props} />;
  }
  const [close, setclose] = useState(false);
  const wishlistErrorClick = () => {
    setclose(true);
  };
  const wishlistErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };
  const [product, setproduct] = useState([]);
  let countProduct = product.length;

  //    const [data, setdata] = useState([]);
  useEffect(() => {
    valueCall();
  }, []);
  let add = 0;
  const [length, setlength] = useState(0);
  let valueCall = () => {
    Promise.all([getCart()]).then((result) => {
      console.log(result[0], result[0].data);
      setproduct(result[0].data);
      result[0].data.map((value, index) => {
        add = add + value.price * value.item;
        console.log(add);
        if (index === result[0].data.length - 1) {
          setlength(add);
        }
      });
    });
  };
  console.log(length);

  const listOfProducts =
    product !== undefined
      ? product.map((data, index) => {
          return (
            <AddCartDisplay
              key={index}
              data={data}
              valueCall={valueCall}
              // addCart={addCart}
              wishlistErrorClick={wishlistErrorClick}
            />
          );
        })
      : null;

  return (
    <div>
      {" "}
      <div
        className="wishlist"
        style={{
          padding: " 20px 20px 0 20px",
          overflow: "auto",
          position: "relative",
          marginTop: "50px",
        }}
      >
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
                My Cart&nbsp;({countProduct})
                <span style={{ float: "right" }}>
                  Total Ammount:&nbsp;{length}
                </span>
              </p>
            </div>
          </div>
        </div>
        <br />
        {listOfProducts}
        {/* <AddCartDisplay/>  */}

        <div align="center" className="mb-4">
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
              Go to home
            </Button>
          </Link>
        </div>

        <Snackbar
          open={close}
          autoHideDuration={3000}
          onClose={wishlistErrorClose}
        >
          <Alert onClose={wishlistErrorClose} severity="error">
            Removed from your Cart!
          </Alert>
        </Snackbar>

        {countProduct > 0 ? (
          <div className="buttondiv">
            <Button
              style={{
                borderRadius: "3px",
                backgroundColor: "#ff3d00",
                color: "white",
                width: "30%",
                height: "60px",
                float: "right",
                fontWeight: "bolder",
                fontSize: "15px",
              }}
            >
              {" "}
              Place Order
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
