import './App.css';
import React, {useState} from 'react';
import Copyelement from './Copyelement';
function App() {

  const [value, setvalue] =useState("");
  const [data, setData]= useState("");
   const handleSubmit = (e)=>{
     e.preventDefault();
     setData(value);
     setvalue("")
   }

  return (
    <>
      <div className='container'> 
      <h1>React copy to clipboard</h1>
      <form action="" onSubmit={handleSubmit}>
      <input className="input" type="text" placeholder='write to copy text' value={value} onChange={(e)=> setvalue(e.target.value)} />
      </form>

      {data && <Copyelement data={data} setData={setData} />}
      </div>
    </>
  );
}

export default App;
