import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar"
import { Box } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <Navbar/>
    </Box>
  )
}

export default App
