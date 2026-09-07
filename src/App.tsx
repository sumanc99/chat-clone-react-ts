
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './components/layouts/DefaultLayout'
import ChatPage from './pages/ChatPage'


function App() {

  return (
    <>
      
      <div className="h-screen dark:bg-gray-800 p-3">
        {/* <OutContainer/> */}
        {/* <DefaultLayout/>  */}
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout/>}>
              <Route path='/' element={<ChatPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      

      
    </>
  )
}

export default App
