import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {
  transactions: [
    { id: 1, text: "comida", amount: -100 },
    { id: 2, text: "salario", amount: 8000 },
    { id: 3, text: "internet", amount: -500 },
    { id: 4, text: "depósito", amount: 6700 },
  ],
};

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
const [state, dispatch] = useReducer(AppReducer, initialState)

function deleteTransaction(id) {
  dispatch({
    type: 'DELETE_TRANSACTION',  
    payload: id
  })
}
function addTransaction(transaction) {
  dispatch({
    type: 'ADD_TRANSACTION',  
    payload: transaction
  })
}

return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
}} >
    {children}
</GlobalContext.Provider>)
}