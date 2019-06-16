import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

import BoardList from './BoardList';
import './Board.scss';

import PostView from "./PostView";
import PostAdd from "./PostAdd";
import {Link} from "react-router-dom";

@inject('stores')
@observer
class Board extends Component {

    componentDidMount() {
        this.props.stores.PostStore.fetchItems();
    }

    render() {
        if(this.props.match && this.props.match.params.command === 'view')
            return <PostView postid={this.props.match.params.postid}/>;
        //if(this.props.location && this.props.location.pathname === '/board/add')
        if(this.props.match && this.props.match.params.command === 'add')
            return  <PostAdd />

        if(this.props.match && this.props.match.params.command === 'edit')
            return <PostAdd postid={this.props.match.params.postid} />;


        let p = this.props.stores.PostStore;
        let user = this.props.stores.ProfileStore.user;
        return (
            <div id='board-page'>
                <div>
                    {p.items && <BoardList items={p.items}/>}
                </div>
                <div>
                    { user && <Link to='board/add'>새 글 쓰기</Link> }
                </div>
            </div>
        );
    }
}

export default Board;