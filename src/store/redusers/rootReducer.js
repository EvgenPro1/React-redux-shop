import {combineReducers} from "redux";
import currency from "./currencyReducer";
import listProduct from "./productReducer";
export const rootReducer = combineReducers({
        currency, listProduct,
    }
)





