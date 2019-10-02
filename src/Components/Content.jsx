import React from 'react';


const ContentContainer = props => {
    return (
        <div className='content-container'>
            {props.children}
        </div>
    );
}

const ContentSlide = props => {
    return (
        <div className='conent-slide'>
            <div className='content-slide__name'>{props.name}</div>
            <div className='content-slide__description'>{props.description}</div>
            <div className='content-slide__further-button'>Далее</div>
        </div>
    )
}

export {
    ContentContainer,
    ContentSlide
}