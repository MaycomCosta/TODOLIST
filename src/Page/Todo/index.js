import React, { useEffect, useState } from 'react'
import * as C from './styles'
import Footer from '../../components/Footer'


const getLocalStorage = () => {
  let todos = localStorage.getItem('todos')
  if (todos) {
    return (todos = JSON.parse(localStorage.getItem('todos')))
  } else {
    return []
  }
}

const Todo = () => {
  // const [todos, setTodos] = useState([])
  const [todos, setTodos] = useState(getLocalStorage())
  const [todo, setTodo] = useState('')
  const [todoEditing, setTodoEditing] = useState(null)
  const [editingText, setEditingText] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [inputEditValue, setInputEditValue] = useState('')


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    const GettingTodo = localStorage.getItem('todos')
    const loadedTodos = JSON.parse(GettingTodo)

    if(loadedTodos) {
      setTodos(loadedTodos)
    }
    
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      complete: false
    }
    setTodos([...todos].concat(newTodo))
    setTodo('')
    setInputValue('')
  }

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  const handleInputEditChange = event => {
    setInputEditValue(event.target.value)
  }

  const deleteTodo = (id) =>{
    const updatedTodos = [...todos].filter((todo) => todo.id !== id)

    setTodos(updatedTodos)
  }

  const toggleComplete = (id) =>{
    const updatedTodos = [...todos].map((todo) => {
      if(todo.id === id){
        todo.complete = !todo.complete 
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const editTodo = (id) =>{
    const updatedTodos = todos.map((todo) => {
      if(todo.id === id){
        return { ...todo, text: editingText }
      }
      return todo
    })

    if (!editingText.trim()) {
      return
    }

    setTodos(updatedTodos)
    setTodoEditing('')
    setEditingText('')
  }


  return (
    <C.MainContainer>
        <C.Todo>
        <C.Title>To-Do...</C.Title>
        <C.FormTodo onSubmit={handleSubmit}>
          <input 
          placeholder='Enter a todo'
          type='text' 
          value={todo} 
          onChange={e => {
            setTodo(e.target.value)
            handleInputChange(e)
            }}/>
          <C.Button disabled={!inputValue} type='submit'>Add todo</C.Button>
        </C.FormTodo>
        {todos.map((todo) =><C.ContainerInputs key={todo.id}>
          { todoEditing === todo.id ? (
          <C.InputEditing
            type='text' 
            value={editingText}
            onChange={e => {
              setEditingText(e.target.value)
              handleInputEditChange(e)
            }}
          />
          )
          : 
          (<C.ContainerShowTodo>
            <C.InputCheckbox
            id='inputCheckbox'
            type='checkbox'
            onChange={() => toggleComplete(todo.id)}
            checked={todo.complete}/>
            <C.TodoText style={{textDecoration : todo.complete ? 'line-through red' : ''}} >
            {todo.text}
            </C.TodoText>
            </C.ContainerShowTodo>)
          }

          {todoEditing === todo.id ? (
          <C.ButtonSubmit
            disabled={!inputEditValue}
            onClick={() => editTodo(todo.id)}>
            <C.CheckIcon />
          </C.ButtonSubmit>
          ) 
          : 
          (
            <>
            <C.EditButton
              type='submit'
              onClick={() => {
                setInputEditValue(true)
                setTodoEditing(todo.id)
                setEditingText(todo.text)
                }}>
              <C.PencilIcon />
            </C.EditButton>

            <C.ButtonDeleteTodo 
            onClick={() => deleteTodo(todo.id)}>
              <C.TrashIcon />
            </C.ButtonDeleteTodo>
          </>
          )}
          </C.ContainerInputs>
          )}
        </C.Todo>
      <Footer />
    </C.MainContainer>
  )
}

export default Todo