import {initialCurrencyState} from "../initialCurrencyState";
import {CHANGE_CURRENCY} from "../actions";


const currencyReducer = (state = initialCurrencyState, {type, payload}) => {
    switch (type) {
        case CHANGE_CURRENCY:
            const newCurrency = state.map(item => ({...item, active: item.abbr === payload}))
            localStorage.setItem('currency', JSON.stringify(newCurrency))
            return (newCurrency)

        default:
            return (JSON.parse(localStorage.getItem('currency')) || state)
    }

}
export default currencyReducer





