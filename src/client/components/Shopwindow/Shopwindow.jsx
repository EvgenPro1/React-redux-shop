import React from 'react'
import {initialProductState} from "../../../store/initialProductState";
import {useHistory} from 'react-router-dom'
import {Button} from "../../../shared/components/Button";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {createBuyProduct} from "../../../store/actionCreators";


export const Shopwindow = () => {
    const history = useHistory()
    const {products} = initialProductState;

    const currency = useSelector(({currency}) => currency, shallowEqual)
    const dispatch = useDispatch()

    const [{name, value}] = currency.filter(({active}) => active); //из массива обектов достаем имя и курс того у которого active===true
    const product = products.map(({id, title, price, image:link, description}) => {
        const redirectToProduct = () => history.push(`/ProductWindow/${id}`)

        const addProductToCart = () => {
            const [product] = products.filter((item) => item.id === id);
            dispatch(createBuyProduct(product))
        }

        return (
            <div key={id} className='d-inline-flex col-sm-3 border m-2 flex-column'>
                <div className="h-100">
                    <div className="product-grid">
                        <span className='d-flex justify-content-center'>Name: {title}</span>
                        <span
                            className='d-flex justify-content-center'>Price: {Math.floor(price / value)} {name}.</span>
                        <div className="product-image text-center">
                            <img className="img" src={link} alt=""/>
                        </div>
                        <div className='text-truncate'>{description}</div>
                    </div>
                </div>
                <Button onClick={redirectToProduct} className='d-block btn btn-outline-info btn-sm mb-2'
                        text='Детально >>>'/>
                <Button onClick={addProductToCart} className='d-block btn btn-outline-success mb-1'
                        text='В корзину &#128722;'/>
            </div>
        )
    })

    return <>
        <div className="container">
            <div className="row">
                {product}
            </div>
        </div>
    </>
}
