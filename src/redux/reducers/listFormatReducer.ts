import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ListFormatType = "list" | "tiles";

interface ListFormatState {
  form: ListFormatType;
}

const initialState: ListFormatState = {
  form: "list",
};

export const listFormatSlice = createSlice({
  name: "listFormat",
  initialState,
  reducers: {
    setFormat: (state, action: PayloadAction<ListFormatType>) => {
      state.form = action.payload;
    },
  },
});

export const { setFormat } = listFormatSlice.actions;

export default listFormatSlice.reducer;
