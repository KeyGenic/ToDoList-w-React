import React from 'react';
import './app.scss'
import { AddField } from './components/AddField/addField.components';
import { ListItems } from './components/AddList/addList.components';
import { CompleteBtn } from './components/complete-btn/complete-btn.component';
import { CompletedTask } from './components/completedTask/completedTask.components';
import { RemoveBtn } from './components/remove-btn/remove-btn-component';

class App extends React.Component{
    state = {
        toDoList : [],
        completedTask :[]
    }

    addList = (text) => {
        if(!text) return
        this.setState((prev) => ({
            toDoList:[...prev.toDoList,text]
        }))
    }

    remove = (id) => {
        const getId = id.target.getAttribute('id')
        this.setState({
            toDoList : this.state.toDoList.filter(({id}) => {
                return id != getId
            })
        })
    }

    handleClick = (complete) => {
        const getTask = complete.target.getAttribute('name')
        this.setState({
            toDoList : this.state.toDoList.filter(({list}) => 
            list !== getTask
            )
        })
        
        this.setState((prev) =>({
            completedTask : [...prev.completedTask,getTask]
        }))
    }

    render(){
        return(
            <div className = 'app'>
                <div className = "to-do-list-container">
                  <AddField onSubmit = {this.addList} />
                  {this.state.toDoList.map(({list,id}) => {
                      return(
                          <ListItems key = {id} task = {list} complete = {<CompleteBtn props = {this.handleClick} task = {list}/>} remove = {<RemoveBtn props = {this.remove} id = {id}/>} />
                      )
                  })}
                    <div className = "line-block"></div>
                    {
                        this.state.completedTask.map((tasks) => {
                            return(
                            <CompletedTask task = {tasks}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default App