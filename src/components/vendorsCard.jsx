import React from "react";
import { Card } from "react-bootstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Tooltip from "@material-ui/core/Tooltip";
import Heart from "react-animated-heart";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addCart, getCart, addWishlist, putAllMaterial } from "./Crud";
export default function VendorsCard(props) {
  let { data } = props;
  console.log(data);
  let addtoWishlist = (id, data) => {
    addWishlist(data);
    data = { ...data, wishlist: isClick };
    console.log(isClick);
    putAllMaterial(id, data);
  };
  const [isClick, setClick] = useState(data.wishlist);
  const [isClicked, setClicked] = useState(true);

  const addTocart = (data) => {
    data = { ...data, item: 1 };
    addCart(data);
    valueCall();
  };
  const [length, setlength] = useState(0);
  let valueCall = () => {
    Promise.all([getCart()]).then((result) => {
      console.log(result[0], result[0].data);
      setlength(result[0].data.length);
    });
  };
  localStorage.setItem("length", `${length}`);

  return (
    <div>
      <Card style={{ width: "18rem", margin: "15px 30px" }}>
        <Link
          to={`/productDetail/${data.id}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Card.Img
            variant="top"
            src={`https://source.unsplash.com/400x300/?+${data.name}`}
          />
        </Link>
        <Card.Body>
          <Link
            to={`/productDetail/${data.id}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            {" "}
            <Card.Title>Product: {data.name}</Card.Title>
            <div
              className="meta"
              style={{
                fontSize: "13px",
                color: "grey",
                margin: 0,
                fontWeight: "bolder",
              }}
            >
              $ {data.price}
            </div>
            <Card.Text style={{ fontSize: "12px", color: "grey", margin: 0 }}>
              Availability: {data.available == 0 ? "Out of Stock" : "In Stock"}
            </Card.Text>
          </Link>

          <Card.Text>
            Vendor: {data.vendor}
            {data.available == 0 ? null : (
              <Tooltip title="Add to Cart" aria-label="add">
                <span
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={() => {
                    addTocart(data);
                    props.addCart();
                  }}
                >
                  <ShoppingCartIcon />
                </span>
              </Tooltip>
            )}
          </Card.Text>
        </Card.Body>
        <Tooltip title="Add to Wishlist" aria-label="top">
          {/* {data !== undefined ? (
            data.length === 0 ? (
              <div className="heart" onClick={props.wishlistClick}>
                <Heart
                  isClick={isClick}
                  onClick={() => {
                    addtoWishlist(data.id);
                    {
                      isClicked !== isClick
                        ? setClick(!isClicked)
                        : setClicked(!isClicked);
                    }
                  }}
                />
              </div>
            ) : (
              <div className="heart" onClick={props.wishlistClick}>
                <Heart
                  isClick={isClicked}
                  onClick={() => {
                    setClicked(!isClicked);
                    <p>
                      isClicked === isClick ? setClicked(!isClicked) : null;
                    </p>;
                    console.log(isClicked, isClick);
                    addtoWishlist(data.id);
                  }}
                />
              </div>
            )
          ) : ( */}
          <div className="heart" onClick={props.wishlistClick}>
            <Heart
              isClick={isClick}
              onClick={() => {
                setClick(!isClick);
                setTimeout(() => {
                  addtoWishlist(data.id, data);
                }, 500);
              }}
            />
          </div>
          {/* )} */}
        </Tooltip>
      </Card>
    </div>
  );
}
