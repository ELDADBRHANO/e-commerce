import React, {  useEffect, useState } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { useThemeHook } from "../../../GlobalComponents/ThemeProvider";
import SearchFilter from "react-filter-search";
import ProductCard from "../../featurs/ProductCard/ProductCard";
import getResponse from "../../../service/productCard.service";
import { Typography } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../../featurs/Footer/Footer";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);
  const [theme] = useThemeHook();
 

  useEffect(() => {
   getResponse().then((res)=>setProductData(res))

  }, []);
  return (
    <>

    <Container className="container-fluid">
      <Row className="justify-content-center">
        <Header/>
      </Row>
      <Row className="justify-content-center mt-5">
      <img className="mt-5 img-fluid" src="/images/commercial.gif" alt="commercial" />
        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
          <Typography variant="h6" className={theme ? "text-light my-5" : "text-black my-5"}>
            Search products
          </Typography>
          <InputGroup className="mb-3">
            <InputGroup.Text
              className={
                theme
                  ? "bg-black text-dark-primary"
                  : "bg-light text-light-primary"
              }
            >
              <BiSearch size="2rem" />
            </InputGroup.Text>
            <FormControl
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className={
                theme ? "bg-light-black text-light" : "bg-light text-black"
              }
            />
          </InputGroup>
        </Col>
        <SearchFilter
          value={searchInput}
          data={productData}
          renderResults={(results) => (
            <Row className="justify-content-center">
              {results.map((item, i) => (
                <ProductCard data={item} key={i} />
              ))}
            </Row>
          )}
        />
      </Row>
    </Container>
        <Footer/>
    </>
  );
};

export default Home;
