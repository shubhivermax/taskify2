import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputFeild from './components/InputFeild.tsx'
import { Todo } from './model.ts'
import ToDoList from './components/ToDoList.tsx'
import WeatherDisplay from './components/weatherdisplay.tsx'


const App: React.FC = ()=> {

  const [todo, setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([]);
  
  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id: Date.now(),todo:todo,isDone:false}]);
      setTodo("");
    }

  }  

  console.log(todos);
  return (
    <div className="App">
      <div className="heading">Taskify</div>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <ToDoList todos={todos} setTodos={setTodos} />
      <WeatherDisplay />
    </div>
  );
}

export default App
