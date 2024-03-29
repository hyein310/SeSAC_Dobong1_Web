const initialState = 0;    
const INCREMENT = "count/INCREMENT";
const DECREMENT = "count/DECREMENT"; 

export const countMinus = () => {
    return {type: DECREMENT};
}
export const countPlus = () => {
    return {type: INCREMENT};
}


export function counterReducer(state=initialState, action) {
    switch(action.type) {
        case "count/INCREMENT":
            return state + 1;
        case "count/DECREMENT":
            return state - 1;
        default:
            return state;
    }
}