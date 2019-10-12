import React from 'react';
import {Link} from 'react-router-dom';


const MainPage = () => {
    return (
        <div className='main-page'>
            <MainPageSlide
                name='Игроки' 
                description='Описание'
                path='/players'
            />
            <MainPageSlide 
                name='Форум'
                description='Описание'
                path='/forum'
            />
            <MainPageSlide
                name='Статистика'
                description='Описание'
                path='/stats' 
            />
            <MainPageSlide 
                name='Логи'
                description='Описание'
                path='/logs' 
            />
        </div>
    );
}

const MainPageSlide = props => {
    return (
        <div className='main-page__slide'>
            <div className='main-page__slide__name'>{props.name}</div>
            <div className='main-page__slide__description'>{props.description}</div>
            <div className='main-page__slide__further-button'>
                <Link to={props.path}>Далее</Link>
            </div>
        </div>
    )
}

export default MainPage;