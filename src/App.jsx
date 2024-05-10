import {useState,useEffect} from "react"
import './App.css'

const useDebounce = (text,delay) => {
  const[debounced,setDebounced]=useState(text);

   useEffect(()=>{
   const timer =setTimeout(()=>{
       setDebounced(text);
   },delay);

   return ()=>{
    clearTimeout(timer);
   }
  },[text,delay]);
  return debounced;
}

function App() {
  const[text,setText]=useState("")
  const debounceText = useDebounce(text,1000)
  return(
    <div>
      <h2>Debounce Hook Tester</h2>
      <input 
      type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder='type something..'
      style={{marginRight:"10px"}}
      />
      <p>Debounced value:{debounceText}</p>
     
    </div>
  )
}

export default App
