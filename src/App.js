import { Routes, Route, } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Main from './components/Main'
import Todo from './Todo'
import FooterMain from './components/FooterMain'
import NotFound from './components/NotFound'
import Action from './components/Action'


function App() {
  return (
    <>
      <Routes>
        
        <Route element={<Main/>} >
          <Route path="/" element={<Home />} />
          <Route path="/Todo" element={<Todo />} />
        </Route>
        
        <Route path="/Action" className="dropdown-item" element={<Action />} />
        <Route path='/*' element={<NotFound />} />
        
        
      </Routes>
    
  </>
  )
}

export default App;
