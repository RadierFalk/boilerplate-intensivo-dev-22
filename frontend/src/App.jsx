import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Card from "./components/Card/Card"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<p>Listagem de itens</p>}></Route>
        <Route path='/cadastro' element={<p>Cadastro de itens</p>}></Route>
      </Routes>

      <div className="content container mb-3 mt-3">
        <div className="row">
          <div className="col-4">
            <Card />
        </div>
          <div className="col-4">
            <Card />
          </div>
        <div className="col-4">
            <Card />
        </div>
        <div className="col-4">
            <Card />
        </div>
      </div>
      </div>

      <Footer />
    
    </div>
  )
}
import { Form } from 'react-router-dom'

export default App
