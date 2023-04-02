import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
  Grid,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import ModalProducts from "../ModalProducts";
import { useAppDispatch } from "../../store/hooks";
import { deleteProduct } from "../../store/modules/products";

interface TableProductsProps {
  listProducts: Array<any>;
}

const TableProducts: React.FC<TableProductsProps> = ({ listProducts }) => {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");
  const dispatch = useAppDispatch();

  const showModal = (id: string) => {
    setModal(!modal);
    setId(id);
  };

  const removeProduct = (id: string) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Grid item xs={12} mt={5}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "100%" }}>
          <TableBody>
            {listProducts.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.title}</TableCell>
                <TableCell>{`$${row.value}`}</TableCell>
                <TableCell align="center">
                  <Button
                    color="info"
                    variant="contained"
                    sx={{ mr: 0.5 }}
                    onClick={() => showModal(row.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => removeProduct(row.id)}
                  >
                    <Delete />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ModalProducts
        open={modal}
        handleClose={() => showModal("")}
        idProduct={id}
      />
    </Grid>
  );
};

export default TableProducts;
