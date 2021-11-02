import { configureStore } from "@reduxjs/toolkit";
import petDetails from "./petDetails";
import counter from "./counter";

export const store = configureStore({
  reducer: { petDetails, counter },
});
