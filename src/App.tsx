import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import "./style/style.css";

function App() {
    const dispatch = useDispatch();

    const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
        actionCreators,
        dispatch
    );
    const amount = useSelector((state: State) => state.bank);

    return (
        <div className="container">
            <div className="app">
                <h1 className="app__header">{amount}</h1>
                <button
                    className="app__button"
                    onClick={() => depositMoney(1000)}
                >
                    Deposit
                </button>
                <button
                    className="app__button"
                    onClick={() => withdrawMoney(500)}
                >
                    Withdraw
                </button>
                <button className="app__button" onClick={() => bankrupt()}>
                    Bankrupt
                </button>
            </div>
        </div>
    );
}

export default App;
