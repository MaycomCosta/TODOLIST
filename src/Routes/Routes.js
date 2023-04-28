import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Info from '../components/Info'
import Home from '../Pages/Home'


const Routes = () =>{  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
      </Switch>
    </Router>
  )
}

export default Routes
