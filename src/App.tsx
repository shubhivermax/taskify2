import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputFeild from './components/InputFeild.tsx'
import { Todo } from './model.ts'
import ToDoList from './components/ToDoList.tsx'
import WeatherDisplay from './components/weatherdisplay.tsx'
import ProgressBar from './components/ProgressBar.tsx'
import Clock from './components/Clock.tsx'

const App: React.FC = ()=> {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Load todos from localStorage on initial render
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });
  
  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id: Date.now(),todo:todo,isDone:false,createdAt: new Date().toISOString()}]);
      setTodo("");
    }

  }  

  console.log(todos);
  return (
    <div className="App">
      <div className="heading-container">
      <div className="heading">Let's Get Things Done!</div>
      <h2>────୨ৎ────</h2>
      <Clock />
      </div>
      <div className="main-container">
        <div className="left-column">
          <WeatherDisplay />
          <ProgressBar todos={todos} />
          
        </div>
        <div className="right-column">
          <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
          <ToDoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App
