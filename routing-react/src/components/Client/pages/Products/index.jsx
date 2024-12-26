import React from 'react'
import ProductCard from '../../../Card'
import { useState, useEffect } from "react";
// import controller from "../../../services";
// import { endpoints } from "../../../services/constants";
// import ProductCard from "../../../components/Client/ProductCard";
import Grid from "@mui/material/Grid";
import { Container, InputLabel, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";

import { Helmet } from "react-helmet-async";
import { endpoints } from '../../../../services/constant';
import controller from '../../../../services';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortValue, setSortValue] = useState("default");
  const [loading, setLoading] = useState(true);

  const filteredProducts = products.filter((p) =>
    p.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  const sortedProducts = filteredProducts.toSorted((a, b) => {
    switch (sortValue) {
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      case "titleAsc":
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      case "titleDesc":
        return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
    }
  });

  console.log(filteredProducts);

  const getProducts = async () => {
    try {
      setLoading(true);
      const data = await controller.getAllData(endpoints.products);

      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getCategries = async () => {
    try {
      const data = await controller.getAllData(endpoints.categories);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    getCategries();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.trim());
  };
  const handleChange = async (event) => {
    const data = await controller.getAllData(endpoints.products);

    if (event.target.value !== "all") {
      const filtered = data.filter((p) => p.category === event.target.value);
      setProducts(filtered);
    } else {
      setProducts(data);
    }
  };
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Products Page</title>
        <link rel="notImportant" href="https://www.chipotle.com" />
        <link
          rel="icon"
          type="image/x-icon"
          href="data:image/jpeg;base64,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"
        />
        <meta name="whatever" value="notImportant" />
        <link rel="canonical" href="https://www.tacobell.com" />
        <meta property="og:title" content="A very important title" />
      </Helmet>

      <div id="products">
        <Container>
          <Grid container spacing={2}>
            <Grid xs={4} style={{ margin: "2rem 0" }}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                onChange={handleSearch}
              />
            </Grid>
            <Grid xs={4} style={{ margin: "2rem 0", padding: "0 2rem" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>{" "}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Sort Products"
                  onChange={(e) => {
                    setSortValue(e.target.value);
                  }}
                >
                  <MenuItem value={"default"}>Default</MenuItem>
                  <MenuItem value={"priceAsc"}>By Price Asc</MenuItem>
                  <MenuItem value={"priceDesc"}>By Price Desc</MenuItem>
                  <MenuItem value={"titleAsc"}>By Title Asc</MenuItem>
                  <MenuItem value={"titleDesc"}>By Title Desc</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={4} style={{ margin: "2rem 0", padding: "0 2rem" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={selectValue}
                  label="Category"
                  onChange={handleChange}
                >
                  {/* <MenuItem value={"all"}>ALL</MenuItem>
                  {categories.length > 0 &&
                    categories.map((c) => {
                      return (
                        <MenuItem value={c.id} key={c.id}>
                          {c.categoryName}
                        </MenuItem>
                      );
                    })} */}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container spacing={5}>
            {!loading ? (
              sortedProducts?.map((p) => {
                return (
                  <Grid item xs={3} key={p.id}>
                    <ProductCard product={p} />
                  </Grid>
                );
              })
            ) : (
              <div style={{ margin: "100px auto" }}>
                <CircularProgress />
                <CircularProgress />
                <CircularProgress />
              </div>
            )}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Products;