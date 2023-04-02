import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import TableProducts from "../../components/TableProducts";
import ModalProducts from "../../components/ModalProducts";
import { useAppSelector } from "../../store/hooks";
import { selectAllProducts } from "../../store/modules/products";

const Products = () => {
  const [modal, setModal] = useState(false);
  const listProducts = useAppSelector(selectAllProducts);

  const showModal = () => {
    setModal(!modal);
  };

  return (
    <Grid item>
      <Grid item display="flex">
        <Typography variant="h4" color="initial">
          List of Products
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ ml: 4 }}
          onClick={() => showModal()}
        >
          <Add />
          New
        </Button>
      </Grid>
      {listProducts.length !== 0 ? (
        <TableProducts listProducts={listProducts} />
      ) : (
        <Typography
          variant="body1"
          color="#707070"
          textAlign="center"
          mt={5}
          sx={{ fontStyle: "italic" }}
        >
          There are no registered products. Click on new.
        </Typography>
      )}

      <ModalProducts
        open={modal}
        handleClose={() => showModal()}
        idProduct=""
      />
    </Grid>
  );
};

export default Products;
