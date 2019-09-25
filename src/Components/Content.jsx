var React = require('react');

class ContentContainer extends React.Component {
    render() {
        return (
            <div className='ContentContainer'>
                {this.props.children}
            </div>
        );
    }
}

const ContentSlide = props => {
    return (
        <div className='ConentSlide'>
            <div className='SlideName'>{props.name}</div>
            <div className='PanelDescription'>Описание</div>
            <div className='FurtherButton'>Далее</div>
        </div>
    )
}

export {
    ContentContainer,
    ContentSlide
}