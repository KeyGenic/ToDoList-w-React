import React from 'react';
import './completeTask.styles.scss'

export const CompletedTask = ({task}) => {
    return(
        <div className ='completed-task-container'>
            <h5>{task}</h5>
            <i class="fas fa-check complete-check"></i>
        </div>
    )
}