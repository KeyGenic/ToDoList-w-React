import React from 'react';
import './remove-btn-.styles.scss'

export function RemoveBtn({props,id}){
    return(
        <i class="fas fa-times remove" onClick = {props} id = {id}></i>
    )
}