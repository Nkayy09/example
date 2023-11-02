import React from "react";
import { List } from "components/List/List";
import { useSelector } from "react-redux";
export default function ExpenseList() {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList); //expenseList is the initial state inside the slice EXPNSE

  return (
    <>
      <List items={expenseList} />
    </>
  );
}
