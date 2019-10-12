import React from 'react';


class PlayersForm extends React.Component {
    render() {
        return (
            <div className='players-page__form'>
                <div className='players-page__form__player-info'>
                    <PlayersFormField
                        type='text'
                        label='Логин'
                        value={this.props.login}
                        onChange={this.props.onStateChange('login')}
                    />
                    <PlayersFormField
                        type='text'
                        label='Имя персонажа'
                        value={this.props.characterName}
                        onChange={this.props.onStateChange('characterName')}
                    />
                    <PlayersFormField
                        type='text'
                        label='Группа'
                        value={this.props.group}
                        onChange={this.props.onStateChange('group')}
                    />
                </div>
                
                <div className='players-page__form__reg-auth-info'>
                    <PlayersFormField
                        type='date'
                        label='Регистрация от'
                        value={this.props.registrBegin}
                        onChange={this.props.onStateChange('registerFrom')}
                    />
                    <PlayersFormField
                        type='date'
                        label='Регистрация до'
                        value={this.props.registrEnd}
                        onChange={this.props.onStateChange('registerTo')}
                    />
                    <PlayersFormField
                        type='date'
                        label='Авторизаия от'
                        value={this.props.authBegin}
                        onChange={this.props.onStateChange('authBegin')}
                    />
                    <PlayersFormField
                        type='date'
                        label='Авторизаия до'
                        value={this.props.authEnd}
                        onChange={this.props.onStateChange('authEnd')}
                    />
                </div>

                <div
                    className='players-page__form__filter-button'
                    onClick={this.props.filterHandler}
                >Отсортировать</div>
            </div>
        );
    }
}


const PlayersFormField = (props) => {
    return (
        <div className='players-page__form__input-field'>
            <span>{props.label}</span> 
            <input 
                type={props.type}
                value={props.value}
                onChange={(e) => {props.onChange(e)}}
            />
        </div>
    );
}


export default PlayersForm;