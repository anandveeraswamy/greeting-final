import { useState } from 'react'
import './App.css'


const Greeting = ({ name }) => (
  <h1>Hey {name}!</h1>
)

const Box = () => {
  const [name, setName] = useState('John')
  return (
    <div className="box">
      <Greeting name={name} />
      <input value={name} onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

const App = () => (
  <Box />
)

export default App
