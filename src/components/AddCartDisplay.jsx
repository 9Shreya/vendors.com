import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { deletCartItem, putCart } from "./Crud";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";
import { useState } from "react";
export default function AddCartDisplay(props) {
  console.log(props);
  let { data } = props;
  console.log(data);
  let deletProduct = (id) => {
    deletCartItem(id);
  };
  let putCartItem = (data, id) => {
    data = { ...data, item: count + 1 };

    putCart(id, data);
    setammount(data.item * data.price);
  };
  const [ammount, setammount] = useState(data.item * data.price);
  const [count, setcount] = useState(data.item);
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
              src={`https://source.unsplash.com/400x300/?+${data.name}`}
              alt="imagdde"
              height="100px"
              width="100px"
            />
          </div>
          <div className="col-md-8">
            <h5>{data.name}</h5>

            <h5 style={{ color: "darkgray", textTransform: "capitalize" }}>
              {data.category}
            </h5>
            <a className="ui teal tag label">
              $ {data.price}
              &nbsp; &nbsp;{data.available === 1 ? "In stock" : "Out of stock"}
            </a>

            <div>
              <RemoveCircleOutlineRoundedIcon
                onClick={() => {
                  setcount(count - 1);
                  putCartItem(data, data.id);
                }}
              />
              <input
                type="disable"
                value={count}
                style={{ width: "25px", padding: "0 5px", marginTop: "5px" }}
              />
              <AddCircleOutlineIcon
                onClick={() => {
                  setcount(count + 1);
                  putCartItem(data, data.id);
                }}
              />
              <span style={{ float: "right" }}>Ammount:&nbsp;{ammount} </span>
            </div>
          </div>
          <div
            className="col-md-1 "
            style={{ color: "darkgray", width: "16%", cursor: "pointer" }}
          >
            <Tooltip title="Delete from Cart" aria-label="add">
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
          </div>
        </div>
      </div>
    </div>
  );
}
