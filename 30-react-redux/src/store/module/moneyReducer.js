const initialState = 0;

export const moneyReducer = (state=initialState, action) => {
    switch(action.type) {
        case "money/INCREMENT":
            return state + action.payload;
        case "money/DECREMENT":
            return state - action.payload;
        default:
            return state;
    }
}

