import React from 'react';
import SidePanel from './SidePanel';
import MainPage from './Pages/MainPage/MainPage';
import TopPanel from './TopPanel';
import PlayersPage from './Pages/PlayersPage/PlayersPage'
import ForumPage from './Pages/ForumPage/ForumPage';
import StatsPage from './Pages/StatsPage/StatsPage';
import LogsPage from './Pages/LogsPage/LogsPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'KShaddix'
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className='app'>
                    <SidePanel />

                    <div className='main-container'>
                        <TopPanel userName={this.state.userName} />
                        
                        <Switch>
                            <Route exact path="/" component={MainPage}/>
                            <Route path="/players" component={PlayersPage}/>
                            <Route path="/forum" component={ForumPage}/>
                            <Route path="/stats" component={StatsPage}/>
                            <Route path="/logs" component={LogsPage}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;