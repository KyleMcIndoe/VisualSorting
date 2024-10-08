import { useEffect, useState } from 'react'
import './App.css'

function Bar(props) {

  const styleObj = {
    backgroundColor: 'gray',
    width: '15px',
    height: (props.h * 50) + 'px'
  }

  return(
    <div className='bar' style={styleObj}>

    </div>
  );
}

function App() {
  const [numBars, setnumBars] = useState(0);
  const [barArr, setbarArr] = useState([]);
  const [vals, setVals] = useState([])
  

  return (
    <>
      <h1>{numBars}</h1>

      <div className='barDiv'>{barArr}</div>

      <input type='number' onChange={(e) => {
        setnumBars(e.target.value)

        for(let i = 1; i <= numBars; i++) {

        }
      }}></input>
    </>
  )
}

export default App
