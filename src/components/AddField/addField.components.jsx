import React,{useState} from 'react';
import './addField.styles.scss'


export const AddField  = (props) => {
    const [inputField,setInput] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        if(inputField === ''){
            e.preventDefault()
            alert('add a task plz')
        }else{
            e.preventDefault()
            const randomId = Math.floor(Math.random()*10000)
            props.onSubmit({
                list:inputField,
                id:randomId
            })
            setInput('')
        }
    }

    return(
        <form id = "field-form" onSubmit = {handleSubmit}>
            <input 
            type="text"
            className = "add-field"
            name = {inputField}
            value = {inputField}
            placeholder = 'Add Something'
            onChange = {handleChange}
            />
            <button className = 'add-btn'>
            <i class="fas fa-plus"></i>
            </button>
        </form>
    )
}