import {combinReducers} from "redux";
import amountReducer from "./AmountReducers";


const  reducers = combinReducers({
    amount : amountReducer
})

export default reducers