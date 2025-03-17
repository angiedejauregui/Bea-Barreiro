import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import AvisoLegal from './components/AvisoLegal'

function App() {

  return (
    <>
      {/* <Home />
      <SobreMi />
      <PorqueYo />
      <Proceso />
      <Testimonio />
      <Faq />
      <Cta />
      <Footer /> */}

      <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} /> {/*  * significa que cuando el path sea cualquier otra, se muestre eso */}
      </Route>
      <Route path="/aviso-legal" element={<AvisoLegal />} />
      {/* <Navbar />
      <Home />
      <CTA /> */}
    </Routes>
    </>
  )
}

export default App
