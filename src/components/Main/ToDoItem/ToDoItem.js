import React from 'react';
import './ToDoItem.css';

const ToDoItem = (props) => {

  const handleKeyDown = (e, i) => {
    if (e.key === 'Enter' && props.todos[i].content !== '') { // sjekk om brukeren trykker "enter" i et gjøremål med innhold
      props.createTodoAtIndex(i); // kjør funskjonen som oppretter et nytt gjøremål
      setTimeout(() => { 
        document.forms[0].elements[i + 1].focus(); // flytt fokus til linjen under
      }, 0);
    } else if (e.key === 'Backspace' && props.todos[i].content === '') { // sjekk om brukeren trykker "backspace" i et gjøremål uten innhold
      props.handleTodoIsDeleted(i); // kjør funskjonen som sletter gjøremålet
      setTimeout(() => { 
        (props.todos.length > 1) && document.forms[0].elements[i - 1].focus() // om det er flere enn ett item flytt fokus til linjen over
      }, 0);
    }
  }

  return (
    props.todos.map((todo, i) => (

      <li 
        key={todo.key}
        // sett klasser om gjøremålet er markert som ferdig eller viktig
        className={`
          TodoItem 
          ${todo.isCompleted && 'TodoItem--isCompleted'} 
          ${todo.isImportant && 'TodoItem--isImportant'}
      `}> 

        <checkbox
          title="Mark as completed"
          tabindex="0"
          className='TodoItem__checkBox'
          onClick={() => props.handleTodoIsChecked(i)}
          onKeyDown={(e) => (e.key === 'Enter') && props.handleTodoIsChecked(i)} // brukere kan bruke tastaturet for å merke gjøremålet
        >
          {todo.isCompleted && (<span>✓</span>)} 
        </checkbox>

        <input
          title="Text for to-do-item"
          type="text"
          placeholder="new to-do"
          value={todo.content}
          onChange={e => props.handleTodoIsChanged(e, i)}
          onKeyDown={e => handleKeyDown(e, i)}
        />

        <checkbox
          title="Mark as important"
          tabindex="0"
          className='TodoItem__importantBtn'
          onClick={() => props.handleTodoIsImportant(i)}
          onKeyDown={(e) => (e.key === 'Enter') && props.handleTodoIsImportant(i)} // brukere kan bruke tastaturet for å merke gjøremålet
        >
          <span>!</span>
        </checkbox>

        <div
          title="Remove item"
          tabindex="0"
          role="button"
          className='TodoItem__removeBtn'
          onClick={() => props.handleTodoIsDeleted(i)}
          onKeyDown={(e) => (e.key === 'Enter') && props.handleTodoIsDeleted(i)} // brukere kan bruke tastaturet for å slette gjøremålet
        >
          <span>✕</span>
        </div>

      </li>
    ))
  )
}

export default ToDoItem