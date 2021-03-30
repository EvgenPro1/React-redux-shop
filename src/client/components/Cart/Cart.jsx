import React from 'react'
import {Button} from '../../../shared/components/Button'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {
    createDecrementProduct,
    createDeleteProduct,
    createHandleCount,
    createIncrementProduct
} from "../../../store/actionCreators";

export const Cart = () => {
    const currency = useSelector(({currency}) => currency, shallowEqual)
    let listProduct = useSelector(({listProduct}) => listProduct)
    const dispatch = useDispatch()

    const [{name, value}] = currency.filter(({active}) => active) // со списка валюты достаем актуальное имя и курс
    const cartList = listProduct.map(({title, price, image: link, quantity, id}) => { //со списка товаров достаем имя товара, цену, ссылку, кол-во по умолчанию и id
        const handleIncrement = () => {
            const product = listProduct.find((item) => item.id === id); // со списка продуктов из корзины по id достаем товар
            dispatch(createIncrementProduct(product)) // и передаем его в диспатч
        }

        const handleDecrement = () => {
            const product = listProduct.find((item) => item.id === id);
            dispatch(createDecrementProduct(product))
        }

        const handleDelete = () => {
            const product = listProduct.find((item) => item.id === id);
            dispatch(createDeleteProduct(product))
        }

        const handleCount = (e) => {
            const product = listProduct.find((item) => item.id === id);
            dispatch(createHandleCount([product, +e.target.value]))
        }

        return (

            <div key={id}
                 className=' cart-card-width d-inline-flex col-sm-3 border m-2 flex-column'>
                <h5 className='d-flex justify-content-center'>name: {title}</h5>
                <p className='d-flex justify-content-center'>price: {Math.floor(price / value)} {name}.</p>
                <div className='d-flex justify-content-center w-auto m-1'>
                    <label>шт: <input type="number"
                                      className=''
                                      value={quantity}
                                      onChange={handleCount}/></label>
                </div>
                <p className='d-flex justify-content-between'>
                    <Button className='ml-2 btn-outline-success' onClick={handleIncrement} text='+'/>
                    <Button className='m-1 btn-outline-secondary' onClick={handleDecrement} text='-'/>
                    <Button className='btn-outline-danger' onClick={handleDelete} text='X'/></p>

                <p className='d-flex justify-content-center'>Total
                    price {Math.floor(quantity * price / value)} {name}.</p>

                <img src={link} className='d-flex img50 mb-1 flex-column align-self-center' alt=''/>


            </div>)
    })

    const emptyPage = <div className='d-flex  text-success align-self-center justify-content-center mt-5'>Корзина пока
        пустая</div>
    const content = listProduct.length ? cartList : emptyPage // если корзина пустая пишем текст

    return (

        <div className="flex-wrap d-inline-flex">
            {content}
        </div>
    )
}
