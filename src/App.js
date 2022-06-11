import './App.css';
import {useState} from 'react';

function App() 
{
  const [name,setData]=useState(null);
  const [Email,setData1]=useState(null);
  const [print,setprint]=useState(false);
  const [print1,setprint1]=useState(false);

  function getData(val)
  {
    setData(val.target.value)
    setprint(false)
    console.warn(val.target.value)
  }

  function getData1(val) 
  {
    setData1(val.target.value)
    setprint1(false)
    console.warn(val.target.value)
  }

  return (
    <div className="App">
      {
        print?
        <h1>{name}   {Email}</h1>
        :null
      } 

      {
        print1?
        <h1>{name}   {Email}</h1>
        :false
      }
      <br/>
      <br/>
      <label>Name</label>
      <input type="text" value={name} onChange={getData} />
      <br/>
      <br/>
      <label>Email</label>
      <input type="text" value={Email} onChange={getData1} />
      <br/>
      <br/>
      <table>
        
      </table>
      <button onClick={()=>setprint(true)} > Print value</button>
    </div>
  );
}

export default App;
