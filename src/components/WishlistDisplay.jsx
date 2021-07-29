import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { deletWishlistItem, addCart } from "./Crud";

export default function WishlistDisplay(props) {
  let { data } = props;
  let deletProduct = (id) => {
    deletWishlistItem(id);
  };
  const addTocart = (data) => {
    data = { ...data, item: 1 };
    addCart(data);
    props.valueCall();
  };
  return (
    <div
      className="container"
      style={{ marginTop: "10px", marginBottom: "15px" }}
    >
      <div className="row">
        <div
          className="col-md-8 p-3 row m-auto wishlist"
          style={{ position: "relative" }}
        >
          <div className="col-md-3">
            <img
              src={`https://source.unsplash.com/400x300/?${data.name}`}
              alt="imagdde"
              height="100px"
              width="100px"
            />
          </div>
          <div className="col-md-8">
            <h5>{data.name}</h5>
            <br />
            <h5 style={{ color: "darkgray", textTransform: "capitalize" }}>
              {data.category}
            </h5>
            <a className="ui teal tag label">
              $ {data.available === 0 ? "Out of Stock" : "In Stock"}
            </a>
          </div>
          <div
            className="col-md-1 "
            style={{ color: "darkgray", width: "16%", cursor: "pointer" }}
          >
            <Tooltip title="Delete from wishlist" aria-label="add">
              <DeleteIcon
                style={{ position: "absolute", right: "10px", top: "20px" }}
                onClick={() => {
                  deletProduct(data.id);
                  setTimeout(() => {
                    props.valueCall();
                  }, 100);
                  props.wishlistErrorClick();
                }}
              />
            </Tooltip>
            <Tooltip title="Add to cart" aria-label="add">
              <ShoppingCartIcon
                style={{
                  position: "absolute",
                  right: "10px",
                  bottom: "15px",
                }}
                onClick={() => {
                  addTocart(data);
                  props.addCart();
                }}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
