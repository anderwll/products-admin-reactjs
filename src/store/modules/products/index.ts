import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import { Products } from "../typeStore";

const productsAdapter = createEntityAdapter<Products>({
  selectId: (state) => state.id,
});

export const { selectAll: selectAllProducts } =
  productsAdapter.getSelectors<RootState>((state) => state.products);

const productsSlice = createSlice({
  name: "products",
  initialState: productsAdapter.getInitialState(),
  reducers: {
    addNewProduct: productsAdapter.addOne,
    attProduct: productsAdapter.updateOne,
    deleteProduct: productsAdapter.removeOne,
  },
});

export const { addNewProduct, attProduct, deleteProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
