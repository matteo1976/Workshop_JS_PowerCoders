import React from 'react';

export default function Page8() {
    let str=`
     // before ES6

    function addNumber(a,b){ 
         console.log (a+b)
    }




    //with ES6
    
    let addNumber= (a,b)=>{console.log(a+b)}
    
    // if you don't have parameters
    let printName= ()=>{console.log("my name in Matteo)}

    //if you have one parameter
    let printName= name=>{console.log(\`my name is \${name} \`)}

    if arrow function make only one operation 
    let printName= name=>console.log(\`my name is \${name} \`)


    
    
    `

    return (

      <div className="pages">
        <h1> ES6</h1>
        <h3>Arrow function</h3>
        <div className="textArea">
            <textarea name="textarea" rows="15" cols="100" >{str}</textarea>
        </div>
        <div className="testArrow">
            test: 
            <ul style={{listStyleType:'decimal'}}>
                <li style={{borderBottom:"1px solid",padding:"10px"}}>mytest=(param1,param2=item=>item*2)=> param2(param1);</li>
                <li style={{padding:"10px"}}>const four = a => b => c => d =>  a + b + c + d</li>
            </ul>
            

        </div>
      </div>
    );
  }
  
  
