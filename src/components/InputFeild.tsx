import React from 'react'
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}


const InputFeild = ({ todo, setTodo}: Props) => {
  return (
    <form className='input'>
        <input type='input' placeholder='Enter' className='input_box'/>
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFeild
