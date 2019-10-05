import React from 'react';


const SidePanel = props => {
    return (
        <>
        <input type='checkbox' id='menu-chk' />
        <div className='side-panel'>
            <div className='header'>
                <span>
                    ADMIN PANEL
                </span>
                <label htmlFor='menu-chk' className='side-panel__hide-menu-btn'>
                </label>
            </div>

            <div className='side-panel__rows-container'>
                <SidePanelSubMenu name='Главная'>
                    <SidePanelRow value='Игроки' />
                    <SidePanelRow value='Форум' />
                    <SidePanelRow value='Статистика' />
                    <SidePanelRow value='Логи' />
                </SidePanelSubMenu>
                <SidePanelRow value='Игроки' />
                <SidePanelRow value='Форум' />
            </div>
        </div>
        </>
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

export default SidePanel;