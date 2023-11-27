import './App.css'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'
import Home from './components/Home'
import UserProfile from './components/UserProfile'

import MyProfile from './components/MyProfile'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/users/:userId" component={UserProfile} />
      <ProtectedRoute exact path="/profile" component={MyProfile} />
      <NotFound />
    </Switch>
  </BrowserRouter>
)

export default App
