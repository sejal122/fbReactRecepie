import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const deleteSlice = createSlice({
  name: "delete",
  initialState: {
    isDeleted: false,
    deleteData: [],
  },
  reducers: {
    deleteItem: async (state, action) => {
      console.log(action.payload);
      axios
        .delete("http://localhost:8000/recipes/" + action.payload)
        .then((res) => console.log(res));
      document.location.reload();
      state.isDeleted=true;
    },
  },
});
export const { deleteItem } = deleteSlice.actions;
export default deleteSlice.reducer;
