import { useEffect, useState } from 'react'
import './App.css'
import {randomize, bubbleSort} from './Algos'

function Bar(props) {

  const styleObj = {
    backgroundColor: 'gray',
    width: '15px',
    height: (props.h * 50) + 'px',
    border: "2px solid white"
  }

  return(
    <div className='bar' style={styleObj}>

    </div>
  );
}

function App() {
  const [barArr, setbarArr] = useState([]);
  const [vals, setVals] = useState([])
  

  useEffect(() => {
    let arr = []
    for(let i = 0; i < vals.length; i++) {
      arr.push(<Bar h={vals[i]} key={i}></Bar>)
    }
    setbarArr(arr)
  }, [vals]);

  return (
    <>
      <input type='number' onChange={(e) => {
        setVals([])
        let arr = []
        for(let i = 1; i <= e.target.value; i++) {
          arr.push(i)
        }
        setVals(arr)
      }}></input>

      <button onClick={() => {
        let x = vals;
        x = randomize(x);
        setVals(x);
      }}>Shuffle</button>

      <button onClick={() => {
        var x = vals
        setVals([])
        var [sortedX, sortedXHistory] = bubbleSort(x);
        setVals([...sortedX])
      }}>Sort</button>

      {vals}
      
      <div className='barDiv'>
        {barArr}
      </div>
    </>
  )
}

export default App
