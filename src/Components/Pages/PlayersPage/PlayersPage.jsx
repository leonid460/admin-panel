import React from 'react';
import PlayersForm from './PlayersForm';
import PlayersTable from './PlayersTable';


class PlayersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: usersList,
            filteredUsersList: usersList,

            filterFields : {
                login: '',
                characterName: '',
                group: '',
                registerFrom: '',
                registerTo: '',
                authFrom: '',
                authTo: '',
            },

            currentUserIdx: 0,
        }

        this.filterFieldChange = this.filterFieldChange.bind(this);
        this.filterUsersList = this.filterUsersList.bind(this);
    }
    

    filterFieldChange = key => e => {
        let filterFields = this.state.filterFields;
        filterFields[key] = e.target.value;
        
        this.setState({filterFields: filterFields});
    }


    filterUsersList() {
        let newFilteredUsersList = [];

        this.state.users.forEach((user) => {
            if (user.login.indexOf(String(this.state.filterFields.login)) === -1) {
                return;
            }
            if (user.group.indexOf(this.state.filterFields.group) === -1) {
                return;
            }
            if (new Date(user.registerDate) < new Date(this.state.filterFields.registerFrom)) {
                return;
            }
            if (new Date(user.registerDate) > new Date(this.state.filterFields.registerTo)) {
                return;
            }

            newFilteredUsersList.push(user)
        })

        this.setState({filteredUsersList: newFilteredUsersList});
    }


    render() {
        return (
            <div className='players-page'>
                <PlayersForm
                    login={this.state.filterFields.login}
                    characterName={this.state.filterFields.characterName}
                    group={this.state.filterFields.group}
                    registerBegin={this.state.filterFields.registrBegin}
                    registerEnd={this.state.sortFieldsregistrEnd}
                    authBegin={this.state.filterFields.authBegin}
                    authEnd={this.state.filterFields.authEnd}
                    onStateChange={this.filterFieldChange}
                    filterHandler={this.filterUsersList}
                />
                <div className='players-page__border'></div>
                <PlayersTable
                    users={this.state.filteredUsersList}
                />
            </div>
        );
    }
}


var usersList = [
    {
        id: 0,
        characterName: 'KShaddix',
        login: 'KShaddix',
        group: 'Администраторы',
        registerDate: '0000-01-01',
        authDate: '',
    }
];

for (let i = 1; i < 9; i++) {
    usersList.push({
        id: i,
        characterName: String(i),
        login: (' CT-460'+String(i)),
        group: 'Grand Army of the Republic',
        registerDate: '0968-06-04',
        authDate: '0969-04-06',
    });
}

for (let i = 9; i < 27; i++) {
    usersList.push({
        id: i,
        characterName: String(i),
        login: ('ST-243'+String(i)),
        group: 'Galactic Empire',
        registerDate: '0970-03-24',
        authDate: '0992-05-01',
    });
}

export default PlayersPage;