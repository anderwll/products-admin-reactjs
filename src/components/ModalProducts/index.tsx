import React, { useState, useEffect } from "react";
import {
  Modal,
  Typography,
  Box,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Check, Close } from "@mui/icons-material";
import {
  addNewProduct,
  attProduct,
  selectAllProducts,
} from "../../store/modules/products";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Products } from "../../store/modules/typeStore";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 345,
  height: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

interface ModalProductsProps {
  idProduct: string;
  open: boolean;
  handleClose: () => void;
}

const ModalProducts = ({
  open,
  handleClose,
  idProduct,
}: ModalProductsProps) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState<number | undefined>();
  const listProducts = useAppSelector(selectAllProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (idProduct) {
      const product = listProducts.find((p) => p.id === idProduct) as Products;

      setTitle(product.title);
      setValue(product.value);
    }
  }, [idProduct, listProducts]);

  const clearInputs = () => {
    setTitle("");
    setValue(undefined);
  };

  const handleChange = (value: any, type: string) => {
    switch (type) {
      case "title":
        setTitle(value);
        break;

      case "value":
        setValue(value);
        break;

      default:
        break;
    }
  };

  const saveNewProduct = () => {
    if (!title || !value) {
      alert("Please fill in the fields");
      return;
    }

    dispatch(addNewProduct({ id: uuidv4(), title, value }));
    handleClose();
    clearInputs();
  };

  const saveUpdateProduct = () => {
    if (!title || !value) {
      alert("Please fill in the fields");
      return;
    }

    dispatch(attProduct({ id: idProduct, changes: { title, value } }));
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-value"
    >
      <Box sx={style}>
        <Box>
          <Typography variant="h4">
            {!idProduct ? "Add new product" : "Update product"}
          </Typography>
        </Box>
        <Box>
          <TextField
            fullWidth
            type="text"
            label="Product Name"
            value={title}
            onChange={(e) => handleChange(e.target.value, "title")}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            type="number"
            label="Price"
            value={value}
            onChange={(e) => handleChange(e.target.value, "value")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            color="success"
            sx={{ p: 1.2 }}
            onClick={!idProduct ? saveNewProduct : saveUpdateProduct}
          >
            <Check sx={{ mr: 1 }} />
            Save
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ p: 1.2 }}
            onClick={handleClose}
          >
            <Close />
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalProducts;
