import { createRoot } from 'react-dom/client'
import GlobalStyle from './styles/globalstyles'
import Todo from './Page/Todo'

const root = createRoot(document.getElementById('root'))
root.render(
  <>
    <Todo />
    <GlobalStyle />
  </>
)