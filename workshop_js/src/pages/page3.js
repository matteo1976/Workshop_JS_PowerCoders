import React from 'react';



function Page3() {
    let str=`
    ************** exmpl const*************
    const age=200; 
    let immortal= false;
    if (age>150){
        let immortal=true;
    }
    console.log(immortal)

    ************** exmpl let or var *************
  
    for(var i=0; i<=10; i++){
        setTimeout(()=>{
            console.log(i)
        },1000*i)
    }
    ************** or *************    
    for(var i=0; i<=10; i++){
      setTimeout(console.log.bind(this,i),1000*i)
  }
  
    `

    return (

      <div className="pages">
        <h1> ES6</h1>
        <h3>LET / VAR  & CONST</h3>
        <div className="textArea">
            <textarea name="textarea" rows="10" cols="100" >{str}</textarea>

            <p><a href="https://repl.it/@matteo1976/Let-Js6" target="_blank"> example</a></p>
        </div>
        
      </div>
    );
  }
  
  export default Page3;
  
