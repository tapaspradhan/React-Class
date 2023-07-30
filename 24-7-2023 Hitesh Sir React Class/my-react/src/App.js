import logo from './logo.svg';
import './App.css';
import MyH from './component/MyH';
import Card from './component/Card';
import React,{useState} from 'react';
function App() {
  // const [variable,howtoupdatethisvariable]=useState();
  // const [details //Variable,setDetails //Function]=useState();
  let [details,setDetails]=useState("tapas");
  const handleClick=()=>{
    details=setDetails("Rupesh")
  }
  return (
    <div>
      <h1>{details}</h1>
      <h1>Test</h1>
      <button onClick={handleClick}>Click Me</button>
      <MyH/>
      <MyH/>
      <Card name="Tapas" email="t@gmail.com"/>
      <Card name="Rupesh" email="r@gmail.com"/>
    </div>
  );
}

export default App;
