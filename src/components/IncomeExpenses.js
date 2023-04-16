import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4 className="fs-6 money plus">Ingresos</h4>
        <p className="money plus fw-bolder">+${income}</p>
      </div>
      <div>
        <h4 className="fs-6 money minus">Gastos</h4>
        <p className="money minus fw-bolder">${expense}</p>
      </div>
    </div>
  );
};
