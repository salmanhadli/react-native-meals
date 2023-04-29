import { createSlice } from "@reduxjs/toolkit";
import { exp } from "react-native-reanimated";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      const { payload } = action;
      state.ids.push(payload.id);
    },
    removeFavourite: (state, action) => {
      const { payload } = action;
      state.ids.splice(state.ids.indexOf(payload.id), 1);
    },
  },
});

export default favouritesSlice.reducer;
export const addFavourite = favouritesSlice.actions.addFavourite;
export const removeFavourite = favouritesSlice.actions.removeFavourite;
