import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const depositMoney = (amount: number) => (
    dispatch: Dispatch<Action>
) => {
    dispatch({ type: ActionType.DEPOSIT, payload: amount });
};

export const withdrawMoney = (amount: number) => (
    dispatch: Dispatch<Action>
) => {
    dispatch({ type: ActionType.WITHDRAW, payload: amount });
};

export const bankrupt = () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.BANKRUPT });
};
