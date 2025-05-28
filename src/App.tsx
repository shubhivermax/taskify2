import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputFeild from './components/InputFeild.tsx'


const App: React.FC = ()=> {

  const [todo, setTodo] = useState<string>("");
  
  return (
    <div className="App">
      <div className="heading">Taskify</div>
      <InputFeild todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App
