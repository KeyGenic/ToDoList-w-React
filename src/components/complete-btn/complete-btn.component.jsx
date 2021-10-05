import React,{useState} from 'react';
import './complete-btn-styles.scss';

export function CompleteBtn({props,task}){
    return(
        <i class="fas fa-check check" onClick = {props} name = {task}></i>
    )
}