import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

import BoardList from './BoardList';
import './Board.scss';

import PostView from "./PostView";
import PostAdd from "./PostAdd";

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

        let p = this.props.stores.PostStore;
        return (
            <div>
                {p.items && <BoardList items={p.items}/>}
            </div>
        );
    }
}

export default Board;