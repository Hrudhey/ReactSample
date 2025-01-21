import React from 'react'
import Home from './components/Home'
import './App.css'
import Register from './components/Register'

const App = () => {
  return (
    <>
    <Register user1={{Myname:'Robin',email:'robin@gmail.com',number:'9456332016', /* for doing Props, can pass variables,components, objects, array etc.. */
      password:'selenium24',conPass:'selenium24',address:'abc'}}/>
    </>
  )
}

export default App