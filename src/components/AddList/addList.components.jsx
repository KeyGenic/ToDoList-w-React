import React from 'react';
import './addList.styles.scss';

export const ListItems = ({task,complete,remove}) => {
    return(
        <div className = 'list-container'>
            <h5>{task}</h5>
            <div className = "list-action">
            {complete}
            {remove}
            </div>
        </div>
    )
}