import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByIdCrud } from "./Crud";
import { SideBySideMagnifier } from "react-image-magnifiers";

export default function ProductDetails() {
  const { productid } = useParams();
  const [data, setdata] = useState({});
  console.log(productid);
  useEffect(() => {
    console.log("hi");
    FetchSingleProduct();
    // return () => {
    //   dispatch(removeSelectedProduct());
    // };
  }, [productid]);
  const FetchSingleProduct = async () => {
    const response = getByIdCrud(productid).catch((err) => {
      console.log(err);
    });
    console.log(response);
    Promise.all([getByIdCrud(productid)]).then((result) => {
      console.log(result[0], result[0].data);
      setdata(result[0].data);
    });
  };
  return (
    <div className="container " style={{ padding: "100px" }}>
      {Object.keys(data).length === 0 ? (
        <div>..Loading</div>
      ) : (
        <div className="row boxColor m-auto">
          <div
            className="col-md-6 "
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <SideBySideMagnifier
              className="detailImage col-md-12  "
              style={{
                width: "60%",
                margin: "auto",
                marginBottom: "55px",
                paddingTop: "65px",
              }}
              imageSrc={`https://source.unsplash.com/400x400/?+${data.name}`}
              imageAlt="Example"
              largeImageSrc={`https://source.unsplash.com/400x400/?+${data.name}`} // Optional
            />

            {/* <img src={image} alt='' className="detailImage col-md-12 " /> */}
          </div>
          <div className="col-md-6 my-auto">
            <h3>{data.name} </h3>
            <br />
            <a className="ui teal tag label">
              ${data.price}&nbsp;&nbsp;
              {data.available === 0 ? "Out of stock" : "In Stock"}
            </a>
            <p className="ui block brown header">Category: {data.category}</p>

            <button
              className="ui google plus button"
              onClick={() => {
                // handleClick();
                // addtoCart(productid);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Added to Cart!
        </Alert>
      </Snackbar> */}
    </div>
  );
}
