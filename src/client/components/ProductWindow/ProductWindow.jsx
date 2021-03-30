import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {initialProductState} from "../../../store/initialProductState";
import {Button} from "../../../shared/components/Button";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {createBuyProduct} from "../../../store/actionCreators";

export const ProductWindow = () => {
    const history = useHistory();
    const location = useLocation();
    const currency = useSelector(({currency}) => currency, shallowEqual)
    const dispatch = useDispatch()

    const [, , idProduct] = location.pathname.split('/'); // из адресной строки достаем id
    const {products} = initialProductState;

    const [{name, value}] = currency.filter(({active}) => active); // работающий и удачный кусок кода вставляем везде где можно
    const [product] = products.filter(({id}) => id === idProduct);
    const redirectToProduct = () => history.push(`/Shopwindow`);
    if (!product) { // защита от ручного ввода адреса (exect в роутах не прописан, чтоб создавать эффект страниц)
        history.push('/Page_404')
        return 'error'} // без ретёрна не работает
    const {title, price, description, image:link} = product;

    const addProductToCart = () => {
        dispatch(createBuyProduct(product))


    }

    return <div className='col-9 d-flex border flex-column w-75 ml-auto mr-auto'>
        <div className="product-grid ">
            <h3 className='d-flex justify-content-center'>Name: {title}</h3>
            <h4 className='d-flex justify-content-center'>{description}</h4>
            <div className='d-flex justify-content-center text-success'>Price: {Math.floor(price / value)} {name}.</div>
            <div className="product-image d-flex justify-content-center">
                <img className='img-product' src={link} alt=""/>
            </div>
        </div>
        <Button onClick={redirectToProduct} className='d-block btn mt-1 btn-outline-info btn-sm mb-2'
                text='<<<< Вернуться к покупкам'/>
        <Button onClick={addProductToCart} className='d-block btn btn-outline-success mb-1'
                text='Добавит в корзину &#128722;'/>
    </div>
}

