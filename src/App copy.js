import React from 'react';
import {useState} from 'react';

function App() {
const[price, setPrice] = useState(100);
const[discountRs, setDiscountRs] = useState("");
const[discountPercent, setDiscountPercent] = useState("");
  function calc(){
const n1=document.getElementById("num1").value;
const n2=document.getElementById("num2").value;
const final_amt=parseInt(n1)-parseInt(n2);
setPrice(final_amt);
//const n3=document.getElementById("num3").value;
alert(n1);
  }
  function calc1(){
const n1=document.getElementById("num1").value;
//const n2=document.getElementById("num2").value;
const n3=document.getElementById("num3").value;
const final_amt=parseInt(n1)-parseInt(n3);
setPrice(final_amt);
  }
  return (
    <>
    <h1> Product Discount Calculator</h1>
    Product Price <input type="number" id="num1" />
    <br />
    <br />
    Product Discount in rupees <input type="number" id="num2" />
    <br />
    <br />
    Product Discount percentage <input type="number" id="num3" />
    <br />
    <br />
    <button type="button" onClick={calc}>Click</button>
    <br />
    <br />
    <button type="button" onClick={calc1}>Click</button>
    <br />
    <br />
    <h3>Final Price:{price.Tofixed}</h3>
    
    


    </>
  )
}

export default App