import {shallowEqual, useSelector} from "react-redux";
import React from "react";

export const TotalPrice = () => {
    let currency = useSelector(({currency}) => currency, shallowEqual)
    const listProduct = useSelector(({listProduct}) => listProduct)
    const arrTotalPrice = listProduct.map(({price = 0, quantity = 0}) => {
        return price * quantity})
    const totalPrice = listProduct.length ? arrTotalPrice.reduce((a, b) => a + b) : 0
    const [{name, value}] = currency.filter(({active}) => active)
    // localStorage.setItem('currency', JSON.stringify(currency))
    // localStorage.setItem('listProduct', JSON.stringify(listProduct))
    // console.log(localStorage.getItem("currency"))
    // console.log(currency);
    return (<div className=' d-flex flex-column col-2'>
        Total price: {Math.floor(totalPrice / value)} {name}.</div>)

}