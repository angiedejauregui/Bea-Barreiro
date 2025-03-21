import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import AvisoLegal from './components/AvisoLegal'

function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} /> 
      </Route>
      <Route path="/aviso-legal" element={<AvisoLegal />} />
    </Routes>
    </>
  )
}

export default App
