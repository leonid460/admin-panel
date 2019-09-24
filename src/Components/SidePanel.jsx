var React = require('react');

class SidePanel extends React.Component {
    render() {
        return (
            <div className='SidePanel'>
                <span className='Header'>
                    ADMIN PANEL
                </span>

                <div className='SidePanelRowsContainer'>
                    <SidePanelRow value='Главная' active={true}/>
                    <SidePanelSubMenu>
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
        <>
        {props.active &&
            <div className='SidePanelRowActive'>{props.value}</div>
        }
        {!props.active && 
            <div className='SidePanelRow'>{props.value}</div>
        }
        </>
    )
}

const SidePanelSubMenu = props => {
    return (
        <div className='SidePanelSubMenu'>
            {props.children}
        </div>
    )
}

module.exports = SidePanel;