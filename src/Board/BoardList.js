import React from 'react';
import {Link} from "react-router-dom";

import BoardListItem from './BoardListItem';

const BoardList = (props) => {
    return (
        <div>
            {props.items.map((item, i) => <BoardListItem key={i} post={item} />)}
        </div>
    );
};

export default BoardList;