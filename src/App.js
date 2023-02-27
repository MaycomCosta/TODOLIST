import react,{ useState } from "react"

import Trash from './assets/Trash.svg'
import Pencil from './assets/lapis.svg'
import Finished from './assets/finished.svg'


import { 
  MainContainer,
  FormTodo,
  Title, 
  ContainerInputs, 
  InputEditing, 
  ContainerShowTodo,
  ButtonDeleteTodo,
  InputCheckbox,
  TrashImg,
  EditButton,
  ButtonSubmit,
  PencilImg,
  TodoText
 } from './styles'

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  const [todoEditing, setTodoEditing] = useState(null)
  const [editingText, setEditingText] = useState("")


  react.useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])


  react.useEffect(() => {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)

    if(loadedTodos) {
      setTodos(loadedTodos)
    }
    
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      complete: false
    }
    setTodos([...todos].concat(newTodo))
    setTodo("")
  }

  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id)

    setTodos(updatedTodos)
  }

  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo) => {
      if(todo.id === id){
        todo.complete = !todo.complete 
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  // console.log(editingText)
  // console.log(setEditingText)
  // console.log(todoEditing)
  // console.log(setTodoEditing)
  function editTodo(id) {
    const updatedTodos = [...todos].map((todo) => {
      if(todo.id === id){
        todo.text = editingText 
      }
      return todo
    })

    setTodos(updatedTodos)
    setTodoEditing("")
    setEditingText("")
  }

  // function showLastEdit(id) {
  //   const updatedTodos = [...todos].map((todo) => {
  //     if(id === todoEditing.id){
  //      todoEditing = editingText   
  //     }
  //     return todo
  //   })

  //   setTodos(updatedTodos)
  //   setTodoEditing(todoEditing)
  //   setEditingText("")
  // }

  return (
    <MainContainer>
      <FormTodo onSubmit={handleSubmit}>
        <input 
        placeholder="Enter a todo"
        type='text' 
        value={todo} 
        onChange={e => setTodo(e.target.value)} />
        <button type='submit'>Add todo</button>
      </FormTodo>

      <Title>To-Do...</Title>

      {todos.map((todo) =><ContainerInputs key={todo.id}>
        { todoEditing === todo.id ? (<InputEditing
        type='text' 
        value={editingText} 
        onChange={e => setEditingText(e.target.value)}
        />
        )
         : 
        (<ContainerShowTodo>
          <InputCheckbox
          id="inputCheckbox"
          type='checkbox'
          onChange={() => toggleComplete(todo.id)}
          checked={todo.complete}/>
          <TodoText style={{textDecoration : todo.complete ? "line-through rgba(55, 53, 47, 2)" : ""}} >
          {todo.text}
          </TodoText>
          </ContainerShowTodo>)
        }

        {todoEditing === todo.id ? (
        <ButtonSubmit 
        onClick={() => editTodo(todo.id)}>
        <img src={Finished}/>
        </ButtonSubmit>
        ) 
        : 
        (
          <>
          <EditButton
          type="submit"
          onClick={() => setTodoEditing(todo.id)}
          /*onChange={() => showLastEdit(todo.id)}*/>
          <PencilImg src={Pencil}/>
          </EditButton>

          <ButtonDeleteTodo 
          onClick={() => deleteTodo(todo.id)}>
          <TrashImg src={Trash}/>
          </ButtonDeleteTodo>
        </>
        )}
        </ContainerInputs>
        )}
        
    </MainContainer>
  )
}

export default App