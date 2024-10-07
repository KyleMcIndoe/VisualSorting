import { useEffect, useState } from 'react'
import './App.css'

function Bar(props) {

  const styleObj = {
    backgroundColor: 'gray',
    border: '10',
    borderColor: '#a9a9a9',
    height: props.height,
    top: '100',
    width: '10'
  }

  return (
    <div style={styleObj}>

    </div>
  )
}

function App() {
  const [n, setN] = useState(10);

  var bars = [];

  useEffect(() => {
    for(let i = 0; i < n; i++) {
      bars.push(<Bar height={i * 100}></Bar>)
    }

    setN(n);
  }, [n]);

  return (
    <>
      <div>
        <h1>Array length {n}</h1>
        <input type='number' onChange={(e) => setN(e.target.value)}></input>
      </div>
      
      <div>
        <Bar height={100}></Bar>
        {bars}
      </div>
    </>
  )
}

export default App
