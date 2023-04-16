import React, {useContext} from "react";
import { IncomeExpenses } from "./IncomeExpenses";
import { GlobalContext } from "./context/GlobalState";

export const Balance = () => {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2)
  
  return (
    <>
    <card className='card shadow p-3 mb-5 bg-body rounded'>
    <div className="d-flex flex-column align-items-center">
      <h4 className="fw-bolder">Balance del mes</h4>
      <h1 className="primary-color fw-bolder">${total} </h1>
      </div>
      <div>
        <div>
<IncomeExpenses/>
        </div>
        <p className="fs-6 text-secondary dropdown dropdown-toggle d-flex flex-column align-items-center">Ver analiticas</p>
      </div>
      </card>
    </>
  );
};
