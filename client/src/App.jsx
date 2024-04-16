import React from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import Signin  from './pages/Signin'
import Signup from './pages/Signup'
import { Home } from './components/Home'
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/Profile'

export default function App() {
  return (
    <div>

<BrowserRouter>


<Routes>
  <Route element={<PrivateRoute/>}>
  <Route path='/'
element={<Home/>}/>
<Route path='/profile' element={<Profile/>}/>

  </Route>


<Route path='/sign-up' element={<Signup/>} />
<Route path='/sign-in' element={<Signin/>}/>
<Route path='*' element={<Navigate to='/'/>}/>

</Routes>

</BrowserRouter>

    </div>
  )
}
