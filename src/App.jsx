import './App.css'
import Blog from './Component/Blog/Blog'
import Questions from './Component/Questions/Questions'
import Header from './Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
      <Questions></Questions>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
