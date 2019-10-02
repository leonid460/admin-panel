import React from 'react';


const TopPanel = props => {
    return (
        <div className='top-panel' >
            <div className='user-icon'></div>
            {props.userName}
            
            <label htmlFor='menu-chk' className='side-panel__show-menu-btn'>
            </label>
        </div>
    )
}

export default TopPanel;