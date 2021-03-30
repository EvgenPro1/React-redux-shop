import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from "../../../shared/components/Button";

export const Page_404 = () => {
    const history = useHistory();
    useEffect(() => history.push(`/Page_404`), [history]); // при загрузке компонента сразу перенаправляем на другую стр.
    const goHome = () => {
        history.push(`/`)
    }
    return (
        <div className='d-flex flex-column align-items-center'>
            <p className='mt-5 text-uppercase'>"Не вденьгах счастье, а в покупках"</p>

            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJy6Y9cwVqxJxZsmH0aWCjjEIhHSY63NOwhw&usqp=CAU"
                alt=""/>
                <p className='mt-5 text-uppercase'>Такой страницы для покупки счастья пока не существует, можете вернуться на главную
                    &#129047;
                    или обратно к покупкам &#129045;</p>
            <Button className='btn-link' text='<<< Вернуться домой' onClick={goHome}/></div>
    )
}