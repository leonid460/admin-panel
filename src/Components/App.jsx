import React from 'react';
import {SidePanel, SidePanelRow, SidePanelSubMenu} from './SidePanel';
import {ContentContainer, ContentSlide} from './Content';
import TopPanel from './TopPanel';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'KShaddix'
        }
    }

    render() {
        return (
            <div className='app'>
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
                
                <div className='main-container'>
                <TopPanel userName={this.state.userName} />
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
            </div>
        );
    }
}

export default App;