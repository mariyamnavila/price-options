import './App.css'
import NavBar from './Components/NavBar/NavBar'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-'>Vite + React</h1>
    <PriceOptions></PriceOptions>
    </>
  )
}

export default App
