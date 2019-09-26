var React = require('react');

class SidePanel extends React.Component {
    render() {
        return (
            <div className='SidePanel'>
                <span className='Header'>
                    ADMIN PANEL
                </span>

                <div className='SidePanelRowsContainer'>
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
        )
    } 
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

module.exports = SidePanel;