import React, { useReducer } from "react";
import VendorsCard from "./vendorsCard";
import { getAllMaterials, getCart } from "./Crud";
import { useEffect } from "react";
import { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
  return <MuiAlert elevation={1} {...props} />;
}
export default function Vendors() {
  const [openCart, setOpenCart] = React.useState(false);
  const [close, setclose] = React.useState(false);
  const [closeCart, setcloseCart] = React.useState(false);
  const wishlistClick = () => {
    setOpen(true);
  };
  const addCart = () => {
    setOpenCart(true);
  };
  const wishlistErrorClick = () => {
    setclose(true);
  };
  const addCartError = () => {
    setcloseCart(true);
  };

  const wishlistClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const addCartClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenCart(false);
  };

  const wishlistErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setclose(false);
  };
  const addCartErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setcloseCart(false);
  };
  const [data, setdata] = useState([]);
  useEffect(() => {
    console.log("skjnd");
    valueCall();
    Promise.all([getAllMaterials()]).then((result) => {
      console.log(result[0], result[0].data);
      setdata(result[0]);
    });
  }, []);

  let categoryArray = [];
  const set1 = new Set();
  for (const item of data) {
    set1.add(item.category);
  }
  console.log(set1);
  for (const iterator of set1) {
    categoryArray.push(iterator);
  }
  console.log(categoryArray);

  let valueCall = () => {
    Promise.all([getCart()]).then((result) => {
      console.log(result[0], result[0].data);
      dispatch({ type: "LENGTH", value: result[0].data.length });
    });
  };
  let reducer = (state, action) => {
    console.log(state, action);
    state = action.value;
    return state;
  };
  const [open, setOpen] = React.useState(false);

  const [length, dispatch] = useReducer(reducer, 0);
  localStorage.setItem("length", `${length}`);
  let value = data.map((ele) => {
    return (
      <VendorsCard
        data={ele}
        key={ele.id}
        wishlistClick={wishlistClick}
        addCart={addCart}
      />
    );
  });
  let fillarray = [];
  let categoryCall = (value) => {
    data.map((ele) => {
      if (ele.category === value) {
        fillarray.push(ele);
      }
    });
    console.log(fillarray);
    setdata(fillarray);
  };
  let dropdown = categoryArray.map((ele) => {
    return (
      <NavDropdown.Item onClick={() => categoryCall(ele)}>
        {ele}
      </NavDropdown.Item>
    );
  });

  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "50px" }}>
      {dropdown.length === 1 ? null : (
        <div>
          <NavDropdown title="Category" id="basic-nav-dropdown">
            {dropdown}
          </NavDropdown>
        </div>
      )}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {" "}
        {value}
        <Snackbar open={open} autoHideDuration={3000} onClose={wishlistClose}>
          <Alert onClose={wishlistClose} severity="success">
            Added to your Wishlist!
          </Alert>
        </Snackbar>
        <Snackbar
          open={close}
          autoHideDuration={3000}
          onClose={wishlistErrorClose}
        >
          <Alert onClose={wishlistErrorClose} severity="error">
            Removed from your Wishlist!
          </Alert>
        </Snackbar>
        <Snackbar
          open={openCart}
          autoHideDuration={3000}
          onClose={addCartClose}
        >
          <Alert onClose={addCartClose} severity="success">
            Added to your Cart!
          </Alert>
        </Snackbar>
        <Snackbar
          open={closeCart}
          autoHideDuration={3000}
          onClose={addCartErrorClose}
        >
          <Alert onClose={addCartErrorClose} severity="error">
            Removed from your Cart!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
