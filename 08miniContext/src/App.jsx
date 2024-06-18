import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>React with Chai and learning is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
