import React from 'react';


const SidePanel = props => {
    return (
        <div className='side-panel'>
            <span className='header'>
                ADMIN PANEL
            </span>

            <div className='side-panel__rows-container'>
                {props.children}
            </div>
        </div>
    )
}

const SidePanelRow = props => {
    return (
        <div className='side-panel__row'>{props.value}</div>
    )
}

const SidePanelSubMenu = props => {
    return (
        <div className='side-panel__sub-menu'>
            <input id={props.name+'check'} type='checkbox'/>
            <label htmlFor={props.name+'check'} type='checkbox'>
                <SidePanelRow value={props.name}/>
            </label>
            <div className="sub-menu__rows-container">
                {props.children}
            </div>
        </div>
    )
}

export { 
    SidePanel,
    SidePanelRow,
    SidePanelSubMenu,
}