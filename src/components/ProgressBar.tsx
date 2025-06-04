import React from 'react'
import { Todo } from '../model';
interface Props {
  todos: Todo[];
}


const ProgressBar: React.FC<Props> = ({ todos }) => {
    const completedCount = todos.filter(todo => todo.isDone).length;
    const totalCount = todos.length;
    const percentage = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="progress-text">
        {completedCount} of {totalCount} tasks completed
      </p>
    </div>
  )
}

export default ProgressBar
