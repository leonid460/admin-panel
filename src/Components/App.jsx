import React from 'react';
import SidePanel from './SidePanel';
import MainPage from './Pages/MainPage';
import TopPanel from './TopPanel';
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
            <div className='app'>
                <SidePanel />

                <div className='main-container'>
                    <TopPanel userName={this.state.userName} />
                    
                    <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                    </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;