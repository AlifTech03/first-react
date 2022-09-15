import React from 'react'
import './App.css'
import Content from './components/Content'
import Navbar from './components/Navbar'
import data from './data'



function App() {
  const content_data = data.map(item => {
    return  <Content  
        key = {item.id}
        {...item}
    />
  })
  return (
   <div>
    <Navbar />
    {content_data}
   </div>
  )
}

export default App
