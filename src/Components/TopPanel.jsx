import React from 'react';


const TopPanel = props => {
    return (
        <div className='top-panel' >
            <div className='user-icon'></div>
            {props.userName}
        </div>
    )
}

export default TopPanel;