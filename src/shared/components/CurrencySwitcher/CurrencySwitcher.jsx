import React from "react";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {createChangeCurrency} from "../../../store/actionCreators";

export const CurrencySwitcher = () => {
    const currency = useSelector(({currency}) => currency, shallowEqual)
    const dispatch = useDispatch()
    const changeCurrency = ({target}) => {dispatch(createChangeCurrency(target.value))}

    const qwerty = currency.find(({active}) => active)

    const currencyList = currency.map(({abbr = "USD", id = 1}) => {
        return <option  key ={id} value={abbr}>{abbr}</option>})
    const switcher = <select defaultValue={qwerty.abbr} onChange={changeCurrency} className='position-absolute fixed-top pull-right'>{currencyList}</select>
    return (
        <>
        {switcher}
        </>
    )
}





