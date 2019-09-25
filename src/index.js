import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SidePanel from './Components/SidePanel.jsx';
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
                <SidePanel />
                <ContentContainer>
                    <ContentSlide name='Игроки' />
                    <ContentSlide name='Форум' />
                    <ContentSlide name='Статистика' />
                    <ContentSlide name='Логи' />
                </ContentContainer>
            </div>
        );
    }
}
 
ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
