import { createSlice } from "@reduxjs/toolkit";
import sampleData from "../data/sampleData";
import { generateRandomChange } from "../utils/helpers";

const initialState = sampleData;

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updatePrices: (state) => {
      return state.map((coin) => {
        const change = generateRandomChange(coin);
        return {
          ...coin,
          price: change.newPrice,
          percent_1h: change.percent1h,
          percent_24h: change.percent24h,
          percent_7d: change.percent7d,
          volume_24h: change.newVolume,
        };
      });
    },
  },
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;
