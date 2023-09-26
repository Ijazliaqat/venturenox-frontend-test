import { createSlice } from "@reduxjs/toolkit";
import { propertiesData } from "./dummyData";

const initialState = {
  properties: propertiesData,
  selected: [],
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    selectedProperties: (state, action) => {
      const newData = action.payload;
      const isAlreadyExist = state.selected.some(
        (item) => item.id === newData.id
      );

      const index = state.selected.findIndex((item) => item.id === newData.id);

      if (index !== -1) {
        state.selected.splice(index, 1);
      } else if (!isAlreadyExist) {
        state.selected = [...state.selected, newData];
      }
    },
  },
});

export const { selectedProperties } = propertySlice.actions;
export default propertySlice.reducer;
