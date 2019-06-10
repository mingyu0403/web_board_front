import React, {Component} from 'react';
import {inject, observer} from 'mobx-react'
import {Link} from "react-router-dom";

@inject('stores')
@observer
class PostView extends Component {
    componentDidMount() {
        this.props.stores.PostStore.fetchItem(this.props.postid);
    }

    render() {
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
                    <div>
                        {p.item.content}
                    </div>
                </div>
                <div>
                    작성시간: {new Date(p.item.created).toLocaleString()}
                </div>
                <div>
                    <Link to='/board'>목록</Link>
                </div>
            </div>
        );
    }
}

export default PostView;