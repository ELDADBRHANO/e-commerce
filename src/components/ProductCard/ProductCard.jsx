import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";
import Snackbar from '@mui/material/Snackbar';

const ProductCard = ({ data }) => {
  let { image, price, title } = data;
  const [theme] = useThemeHook();
  const { addItem } = useCart();
  const addToCart = () => {
    addItem(data);
  };
  return (
    <Card
      style={{ width: "18rem", height: "auto" }}
      className={`${
        theme ? "bg-light-black text-light" : "bg-lihgt text-black"
      } text-center p-0 overflow-hidden shadow mx-auto mb-4`}
    >
      <div
        style={{
          background: "white",
          height: "15rem",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "inherit",
        }}
      >
        <div style={{ width: "9rem" }}>
          <Card.Img variant="top" src={image} className="img-fluid" />
        </div>
      </div>
      <Card.Body>
        <Card.Title
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Card.Title>
        <Card.Title>
          Price: <span className="h3">{`${price} $`}</span>
        </Card.Title>
        <select
          class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected>sizes</option>
          <option defaultValue="1">S</option>
          <option defaultValue="2">M</option>
          <option defaultValue="3">L</option>
        </select>
        <Button id="btnAddToCart"
          onClick={() => addToCart()}
          className={`${
            theme ? "bg-dark-primary text-black" : "bg-light-primary"
          } d-flex align-item-center m-auto border-0`}
        >
          <BsCartPlus size="1.8rem" />
          Add to cart
        </Button>
      </Card.Body>
      <div id="notify"></div>
    </Card>
  );
};

export default ProductCard;


