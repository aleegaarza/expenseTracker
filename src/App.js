import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { TransactionList } from "./components/TransactionList";
import "./App.css";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./components/context/GlobalState";

function App() {
  // const [transactions, setTransactions] = useState([
  //   {id: 1, text: 'comida', amount: -100},
  //   {id: 1, text: 'salario', amount: +8000},
  //   {id: 1, text: 'internet', amount: -500},
  //   {id: 1, text: 'depósito', amount: +6700},
  // ])
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
