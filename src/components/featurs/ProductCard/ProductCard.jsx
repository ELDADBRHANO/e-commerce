import { Button, Card } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";
import { useThemeHook } from "../../../GlobalComponents/ThemeProvider";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
const ProductCard = ({ data}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let { images, price, title,description } = data;
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
        <div style={{ width: "15rem" }}>
          <Card.Img variant="top" src={images[2]} className="img-fluid" />
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
      <div className="mb-5">
      <Button variant="primary" onClick={handleShow}>
        More Info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </Card>
  );
};

export default ProductCard;
