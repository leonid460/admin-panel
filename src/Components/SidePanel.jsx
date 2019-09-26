var React = require('react');

const SidePanel = props => {
    return (
        <div className='SidePanel'>
            <span className='Header'>
                ADMIN PANEL
            </span>

            <div className='SidePanelRowsContainer'>
                {props.children}
            </div>
        </div>
    )
}

const SidePanelRow = props => {
    return (
        <div className='SidePanelRow'>{props.value}</div>
    )
}

const SidePanelSubMenu = props => {
    return (
        <div className='SidePanelSubMenu'>
            <input id={props.name+'check'} type='checkbox'/>
            <label htmlFor={props.name+'check'} type='checkbox'>
                <SidePanelRow value={props.name}/>
            </label>
            <div className="SubRowsContainer">
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