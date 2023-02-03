import { Routes, Route, } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Main from './components/Main'
import Todo from './Todo'
import FooterMain from './components/FooterMain'
import NotFound from './components/NotFound'


function App() {
  return (
    <>
    <Header></Header> 
      <Routes>
        <Route element={<Main/>} >
          <Route path="/" element={<Home />} />
          <Route Path="/Todo" element={<Todo />} />
        </Route>
        {/* <Route path='*' element={<NotFound />} />     */}
      </Routes>
    <FooterMain></FooterMain> 
  </>
  )
}

export default App;
