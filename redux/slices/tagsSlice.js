import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: {
    methodology: 0,
    statistics: 0,
    data: 0,
  },
  activeTag: "",
};

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    updateTags: (state, actions) => {
      state.tags = actions.payload;
    },
    setActiveTag: (state, actions) => {
      state.activeTag = actions.payload;
    },
  },
});

export const { updateTags, setActiveTag } = tagsSlice.actions;

export default tagsSlice.reducer;
