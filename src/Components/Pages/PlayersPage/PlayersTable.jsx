import React from 'react';


class PlayersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLength: 10,
            pageNum: 0,
            pageBegin: 0,
            pageEnd: 9,
        }

        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }


    nextPage() {
        if (this.state.pageEnd < this.props.users.length-1){
            let num = this.state.pageNum+1;
            let begin = num * this.state.pageLength;
            let end = begin + this.state.pageLength - 1;
            if (end > this.props.users.length) {
                end = this.props.users.length - 1;
            }

            this.setState({pageNum: num, pageBegin: begin, pageEnd: end});
        }
    }


    prevPage() {
        if (this.state.pageBegin > 0) {
            let num = this.state.pageNum-1;
            let begin = num * this.state.pageLength;
            let end = begin + this.state.pageLength - 1;
            if (end > this.props.users.length) {
                end = this.props.users.length - 1;
            }

            this.setState({pageNum: num, pageBegin: begin, pageEnd: end});
        }
    }


    usersRows = () => {
        let res = []
        
        let page = this.props.users.slice(this.state.pageBegin, this.state.pageEnd+1)

        for (let i = 0; i < page.length; i++) {
            res.push(
                <tr>
                    <td>{page[i].id}</td>
                    <td>{page[i].login}</td>
                    <td>{page[i].group}</td>
                    <td>{page[i].registerDate}</td>
                    <td>{page[i].authDate}</td>
                    <td className='players-table__button'>
                        <div id={i+this.state.pageBegin}>Редактировать</div>
                    </td>
                </tr>
            )
        }

        return res;
    }


    render() {
        return (
            <>
            <div className='players-table'>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Логин</th>
                        <th>Группа</th>
                        <th>Дата регистрации</th>
                        <th>Дата авторизации</th>
                    </tr>

                    {this.usersRows()}
                </table>
            </div>
                <div className='players-table__change-page-container'>
                    <div className='players-table__change-page' onClick={this.prevPage}>Назад</div>
                    <div className='players-table__pages-range'>{(this.state.pageBegin+1)+"..."+(this.state.pageEnd+1)}</div>
                    <div className='players-table__change-page' onClick={this.nextPage}>Далее</div>
                </div>
            </>
        );
    }
}


export default PlayersTable;