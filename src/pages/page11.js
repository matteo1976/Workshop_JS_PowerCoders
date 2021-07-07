import React from 'react';

export default function Page11() {
    let str=`

    function firstPromise(){
        return new Promise(res=>{setTimeout(()=>{
            res(console.log("first value"))},8000)})
    }
    
    function secondPromise(){
        return new Promise(res=>{setTimeout(()=>{
            res(console.log("second value"))},5000)})
    }
    function lastPromise(){
        return new Promise(res=>{
                   setTimeout(()=>{
                       res(console.log("last value"))
                   },3000)}
               )
    }
    
   function printSequence(){
    firstPromise()
    secondPromise()
    lastPromise()
   }  
   
   printSequence()

    
    `
    let line1="sync function showAvatar() { "

    return (
        
      <div className="pages">
        <h1> ES7- ES8</h1>
        <h3>Async / Await</h3>
        <div className="textArea">
            <textarea name="textarea" rows="25" cols="100" >{str}</textarea>
        </div>
        <div className="testArrow" style={{textAlign:"left"}}>
            {line1}<br/>
            <span style={{ paddingLeft:"40px"}}>let response = await fetch('/article/promise-chaining/user.json');</span><br/>
            <span style={{ paddingLeft:"40px"}}>let user = await response.json();</span><br/>

        </div> 
      </div>
    );
  }
  
  
