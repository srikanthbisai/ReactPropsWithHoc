import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'
import withUserData from './components/withUserData'

function App() {
 const WrappedChild = withUserData(Child);
  return (
    <>
     <h1>This is a demonstration of HOC usage to pass props</h1>
     <WrappedChild/>  
    </>
  )
}

export default App
