import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth-slice";
import { expenseSlice } from "./expense/expense-slice";
const store = configureStore({
  reducer: {
    EXPENSE: expenseSlice.reducer,
    // AUTH: authSlice.reducer,
  },
});

export { store };

// import { configureStore } from "@reduxjs/toolkit";
// const store = configureStore({
//   reducer: {},
// });
// export default store;
