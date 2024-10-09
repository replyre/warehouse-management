import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  warehouses: [], // List of warehouses
  selectedWarehouse: null, // For editing/viewing details
};

// Create slice for warehouse operations
const warehouseSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {
    setWarehouses: (state, action) => {
      state.warehouses = action.payload;
    },
    selectWarehouse: (state, action) => {
      state.selectedWarehouse = action.payload;
    },
    updateWarehouse: (state, action) => {
      const index = state.warehouses.findIndex(
        (w) => w.id === action.payload.id
      );
      if (index !== -1) {
        state.warehouses[index] = action.payload;
      }
    },
  },
});

// Export actions
export const { setWarehouses, selectWarehouse, updateWarehouse } =
  warehouseSlice.actions;

// Configure store
const store = configureStore({
  reducer: {
    warehouse: warehouseSlice.reducer,
  },
});

export default store;
