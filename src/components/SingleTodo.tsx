import React, { useState } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import './styles.css'
import ToDoList from './ToDoList'

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const [edit,setEdit]= useState<boolean>(false);
    const[editTodo,setEditTodo]=useState<string>(todo.todo)
    const handleDone = (id:number)=>{
        setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone}:todo))
    }

    const handleDelete = (id:number)=>{
        setTodos(todos.filter((todo)=>todo.id!==id))
    }
  return (
    <form className='todos_single'>
        {
            todo.isDone?(
                <s className='todos_single--text'>{todo.todo}</s>

            ):(
                <span className='todos_single--text'>{todo.todo}</span>

            )
        }

      <div className="icons">
        
        <span className="icon" onClick={()=>handleDelete(todo.id)}><AiFillDelete  /></span>
        <span className="icon" onClick={()=>handleDone(todo.id)}><MdDone /></span>
      </div>
    </form>
  )
}

export default SingleTodo
