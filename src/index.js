import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SidePanel from './Components/SidePanel.jsx';
import Content from './Components/Content.jsx';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <SidePanel />
                <Content />
            </div>
        );
    }
}
 
ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
