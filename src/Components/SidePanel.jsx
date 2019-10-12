import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const SidePanel = () => {
    return (
        <>
        <input type='checkbox' id='menu-chk' />
        <div className='side-panel'>
            <div className='header'>
                <Link to='/'><span>ADMIN PANEL</span></Link>
                <label htmlFor='menu-chk' className='side-panel__hide-menu-btn'>
                </label>
            </div>

            <div className='side-panel__rows-container'>
                <SidePanelSubMenu name='Главная'>
                    <SidePanelRow value='Игроки' path='/players' />
                    <SidePanelRow value='Форум' path='/forum' />
                    <SidePanelRow value='Статистика' path='/stats' />
                    <SidePanelRow value='Логи' path='/logs' />
                </SidePanelSubMenu>
                <SidePanelRow value='Игроки' path='/players' />
                <SidePanelRow value='Форум' path='/forum' />
            </div>
        </div>
        </>
    )
}

const SidePanelRow = props => {
    return (
        <NavLink to={props.path} activeClassName="side-panel__row-active"> 
            <div className='side-panel__row'>
                {props.value}
            </div>
        </NavLink>
    )
}

const SidePanelSubMenu = props => {
    return (
        <div className='side-panel__sub-menu'>
            <input id={props.name+'check'} type='checkbox'/>
            <label htmlFor={props.name+'check'} type='checkbox'>
                <div className='side-panel__row'>
                    {props.name}
                </div>
            </label>
            <div className="sub-menu__rows-container">
                {props.children}
            </div>
        </div>
    )
}

export default SidePanel;