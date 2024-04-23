
import './App.css'
import Navbar from './Components/Header/Navbar'
import SignupForm from './Components/Auth/SignUp'
import {Routes, Route, Navigate} from 'react-router-dom'
import LogIn from './Components/Auth/Login'
import Home from './Components/Dashboard/Home'
import RouteGuard from './Service/RouteGurad/RouteGuard'
import ViewSingleData from './Components/Dashboard/ViewSingleData'
import Error from './Components/Dashboard/Error'


function App() {
  const token = localStorage.getItem('token')
  return (
    <>
 <Navbar/>


 {/* Dynamict Routing  */}
    <Routes>
      <Route path='/' element={<SignupForm/>}/>
      <Route path='/Login' element={token ? <Navigate to='/Home' replace={true}/> : <LogIn/>}/>
    <Route path='/Home' element={<RouteGuard Component={Home}/>}/>
    <Route path='/View/:item' element={<RouteGuard Component={ViewSingleData}/>}/>
    <Route path="*" element={<Error/>}  />
     
    </Routes>
    </>
  )
}

export default App
