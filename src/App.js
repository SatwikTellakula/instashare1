import './App.css'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import UserProfile from './components/UserProfile'

import MyProfile from './components/MyProfile'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/users/:userId" component={UserProfile} />
      <Route exact path="/profile" component={MyProfile} />
    </Switch>
  </BrowserRouter>
)

export default App
