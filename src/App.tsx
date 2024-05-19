import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Description from './components/description/Description'
import Sample from './components/sample/Sample'
import './App.scss'

function App() {
  const flavors = ['flamin-hot', 'cheese', 'tomato']
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="container" className='cheese'>
    <header className='principal-header'>
      <Navbar/>
    </header>
    <main>
     <Description/>
      <Sample/>
    </main>

    </div>
    </>
  )
}

export default App
