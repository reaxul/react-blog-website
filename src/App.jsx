import { useState } from 'react'
import './App.css'
import Blog from './Component/Blog/Blog'
import Header from './Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
    </div>
  )
}

export default App
