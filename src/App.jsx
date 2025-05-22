import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Cards from './components/Cards'
import News from './components/News'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <div>
        <Routes>
           <Route path='/' element={<Layout />}>
           
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
