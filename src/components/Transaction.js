import React, {useContext} from "react";
import { GlobalContext } from "./context/GlobalState";

export const Transaction = ({ transaction }) => {
  const {deleteTransaction} = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className="fw-bolder">
      {transaction.text}
      <span className={transaction.amount < 0 ? "minus dropdown-toggle" : "plus dropdown-toggle"}>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)} >x</button>
    </li>
  );
};
