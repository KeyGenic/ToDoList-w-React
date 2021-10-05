import React from 'react';
import './app.scss'
import { AddField } from './components/AddField/addField.components';
import { ListItems } from './components/AddList/addList.components';
import { CompleteBtn } from './components/complete-btn/complete-btn.component';
import { RemoveBtn } from './components/remove-btn/remove-btn-component';

class App extends React.Component{
    state = {
        toDoList : []
    }

    addList = (text) => {
        if(!text) return
        this.setState((prev) => ({
            toDoList:[...prev.toDoList,text]
        }))
    }


    render(){
        return(
            <div className = 'app'>
                <div className = "to-do-list-container">
                  <AddField onSubmit = {this.addList} />
                  {this.state.toDoList.map(({list}) => {
                      return(
                          <ListItems task = {list} complete = {<CompleteBtn/>} remove = {<RemoveBtn/>} />
                      )
                  })}
                </div>
            </div>
        )
    }
}

export default App