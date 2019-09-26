var React = require('react');

const ContentContainer = props => {
    return (
        <div className='ContentContainer'>
            {props.children}
        </div>
    );
}

const ContentSlide = props => {
    return (
        <div className='ConentSlide'>
            <div className='SlideName'>{props.name}</div>
            <div className='SlideDescription'>{props.description}</div>
            <div className='FurtherButton'>Далее</div>
        </div>
    )
}

export {
    ContentContainer,
    ContentSlide
}