import { combineReducers } from "redux";
import { isDataReducer } from "./module/isDataReducer";
import { counterReducer } from "./module/counterReducer";
import { moneyReducer } from "./module/moneyReducer";

// 여러 개의 리듀서를 하나로 합쳐주는 combineReducers
const rootReducer = combineReducers({
    isData:isDataReducer,
    count:counterReducer,
    money:moneyReducer,
});

export default rootReducer;