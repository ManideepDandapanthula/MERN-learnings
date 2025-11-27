import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comments from './Comments'
import Counter from './Counter'
import Form from './From'
import Commnetform from './CommnetsForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter/>
     {/* <Comments/> */}
     {/* <Commnetform/> */}

    </>
  )
}

export default App
