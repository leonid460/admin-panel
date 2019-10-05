import React from 'react';


const MainPage = () => {
    return (
        <div className='main-page'>
            <MainPageSlide
                name='Игроки' 
                description='Описание' 
            />
            <MainPageSlide 
                name='Форум'
                description='Описание'
            />
            <MainPageSlide
                name='Статистика'
                description='Описание' 
            />
            <MainPageSlide 
                name='Логи'
                description='Описание' 
            />
        </div>
    );
}

const MainPageSlide = props => {
    return (
        <div className='main-page__slide'>
            <div className='main-page__slide__name'>{props.name}</div>
            <div className='main-page__slide__description'>{props.description}</div>
            <div className='main-page__slide__further-button'>Далее</div>
        </div>
    )
}

export default MainPage;