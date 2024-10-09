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
      <input type='number' onChange={(e) => {
        setVals([])
        let arr = []
        for(let i = 0; i < e.target.value; i++) {
          arr.push(i)
        }
        setVals(arr)
      }}></input>

      {vals}
    </>
  )
}

export default App
