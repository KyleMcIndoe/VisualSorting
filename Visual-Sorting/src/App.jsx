import { useEffect, useState } from 'react'
import './App.css'
import {randomize, bubbleSort} from './Algos'

function Bar(props) {

  const styleObj = {
    backgroundColor: 'gray',
    width: (100 / props.num) / 2 + '%',
    height: (props.h * (100 / props.num)) - 10 + '%',
    border: "2px solid white",
    alignSelf: 'flex-end',
    margin: '0'
  }

  return(
    <div className='bar' style={styleObj}>

    </div>
  );
}

function App() {
  const [barArr, setbarArr] = useState([]);
  const [vals, setVals] = useState([]);
  const [delay, setDelay] = useState(1000);
  const [sorting, setSorting] = useState(true);
  

  useEffect(() => {
    let arr = []
    for(let i = 0; i < vals.length; i++) {
      arr.push(<Bar h={vals[i]} key={i} num={vals.length}></Bar>)
    }
    setbarArr(arr)
  }, [vals]);

  return (
    <>
      <div className='wrapper'>
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
          setSorting(true)
          var [sortX, sortXHistory] = bubbleSort(x);

          function step(i) {
            setVals([...sortXHistory[i]]);
          }

          for(let i = 0; i < sortXHistory.length && sorting == true; i++) {
            setTimeout(() => {
              step(i)
            }, delay)
          }

        }}>Sort</button>

        <button onClick={() => {
          setSorting(false)
        }}>Stop sort</button>

        <input type='number' onChange={(e) => {
          setDelay(this.target.value)
        }}></input>

        
        <div className='barDiv'>
          {barArr}
        </div>

        <select>
          <option value={bubbleSort([])}>Bubble sort</option>
          <option value={randomize([])}>Randomize</option>
        </select>
      </div>
    </>
  )
}

export default App
