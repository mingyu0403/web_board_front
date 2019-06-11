import React, {Component} from 'react';
import {inject, observer} from 'mobx-react'
import {Link, Redirect} from "react-router-dom";

@inject('stores')
@observer
class PostView extends Component {

    state = {
        goToList: false,
        goToEdit: false
    };
    componentDidMount() {
        this.props.stores.PostStore.fetchItem(this.props.postid);
    }

    render() {
        if(this.state.goToList)
            return <Redirect to={'/board'}/>;

        if(this.state.goToEdit === true)
            return <Redirect to={`/board/edit/${this.props.postid}`} />;

        let p = this.props.stores.PostStore;
        if(! p.item)
            return <div />;
        return (
            <div>
                <div>
                    제목: {p.item.title}
                </div>
                <div>
                    내용:
                    <div
                        dangerouslySetInnerHTML={{__html:p.item.content}}
                    />
                </div>
                <div>
                    작성시간: {new Date(p.item.created).toLocaleString()}
                </div>
                <div>
                    <Link to='/board'>목록</Link>
                    <button onClick={this.deletePost}>삭제</button>
                    <button onClick={this.editPost}>수정</button>
                </div>
            </div>
        );
    }

    editPost = () => this.setState({goToEdit: true});

    deletePost = async () => {
        if(window.confirm('삭제하시겠습니까?') === false) return;

        let id = this.props.postid;
        if(await this.props.stores.PostStore.deletePost(id)){
            await this.props.stores.PostStore.fetchItems();
            this.setState({
                ...this.state,
                goToList: true
            })
        }
    }
}

export default PostView;