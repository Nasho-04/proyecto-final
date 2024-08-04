import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Entorno from './components/Entorno/Entorno'
import EntornoNuevoForm from './components/EntornoNuevoForm/EntornoNuevoForm'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/entorno/:entorno_id/' element={<Entorno></Entorno>}/>
        <Route path='/entorno/:entorno_id/:canal_id' element={<Entorno></Entorno>}/>
        <Route path='/entorno/nuevo' element={<EntornoNuevoForm></EntornoNuevoForm>}/>
      </Routes>
    </>
  )
}

export default App
