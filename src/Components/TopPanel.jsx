var React = require('react');

const TopPanel = props => {
    return (
        <div className='TopPanel' >
            <div className='UserIcon'></div>
            {props.userName}
        </div>
    )
}

module.exports = TopPanel;