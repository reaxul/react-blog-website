import { useState } from 'react'
import './App.css'
import Blog from './Component/Blog/Blog'
import Questions from './Component/Questions/Questions'
import Header from './Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
      <Questions></Questions>
    </div>
  )
}

export default App
