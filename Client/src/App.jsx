import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Entry from './Pages/Entry'
import Display from './Pages/Display'
import Update from './Pages/Update'

function App() {

  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path='/entry' element={<Entry/>}></Route>
              <Route path='/display' element={<Display/>}></Route>
              <Route path='/update' element={<Update/>}></Route>
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
