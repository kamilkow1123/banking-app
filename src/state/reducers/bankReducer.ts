import { Action } from "../actions";

const INITIAL_STATE = 0;

export const bankReducer = (state: number = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case "DEPOSIT":
            return state + action.payload;
        case "WITHDRAW":
            return state - action.payload;
        case "BANKRUPT":
            return 0;
        default:
            return state;
    }
};
