import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    //useSelector
    expenseList: [
      { name: "apple", price: 10.0 },
      { name: "ornage", price: 20.0 },
    ],
    income: 1000,
  },
  reducers: {
    //useDispatch
    addExpenseAction: (currentSlice, action) => {
      console.log("addExpense action");
      currentSlice.expenseList.push(action.payload);
    },
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
  },
});
export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;

//const[income,setIncome]=useState(1000)
//()=>setState(2000)
//const[exp,setExp]=useState(['a','b'])
//button onclick={clickHnadler}
