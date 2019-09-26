import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SidePanel} from './Components/SidePanel.jsx';
import {SidePanelRow} from './Components/SidePanel.jsx';
import {SidePanelSubMenu} from './Components/SidePanel.jsx';
import {ContentContainer} from './Components/Content.jsx';
import {ContentSlide} from './Components/Content.jsx';
import TopPanel from './Components/TopPanel.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'KShaddix'
        }
    }

    render() {
        return (
            <div className='App'>
                <TopPanel userName={this.state.userName} />

                <SidePanel>
                    <SidePanelSubMenu name='Главная'>
                        <SidePanelRow value='Игроки' />
                        <SidePanelRow value='Форум' />
                        <SidePanelRow value='Статистика' />
                        <SidePanelRow value='Логи' />
                    </SidePanelSubMenu>
                    <SidePanelRow value='Игроки' />
                    <SidePanelRow value='Форум' />
                </SidePanel>
                
                <ContentContainer>
                    <ContentSlide
                        name='Игроки' 
                        description='Описание' 
                    />
                    <ContentSlide 
                        name='Форум'
                        description='Описание'
                    />
                    <ContentSlide
                        name='Статистика'
                        description='Описание' 
                    />
                    <ContentSlide 
                        name='Логи'
                        description='Описание' 
                    />
                </ContentContainer>
            </div>
        );
    }
}
 
ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
