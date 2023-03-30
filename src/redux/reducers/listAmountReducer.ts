import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ListAmountType = number;

interface ListAmountState {
  amount: ListAmountType;
}

const initialState: ListAmountState = {
  amount: 0,
};

export const listAmountSlice = createSlice({
  name: "listAmount",
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<ListAmountType>) => {
      state.amount = action.payload;
    },
  },
});

export const { setAmount } = listAmountSlice.actions;

export default listAmountSlice.reducer;
