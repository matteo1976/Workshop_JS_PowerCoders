import React from 'react';

export default function Page6() {
    let str=`
    
    let name="Matteo";
    let age=43;

    //before ES6
    var myText= "hello my name is " + name + " i have "+ age 
    

    //with ES6
    let myText= \`Hello my name is \${ name} i have \${age}\`
    `

    return (

      <div className="pages">
        <h1> ES6</h1>
        <h3>String Interpolation</h3>
        <div className="textArea">
            <textarea name="textarea" rows="15" cols="100" >{str}</textarea>
        </div>
      </div>
    );
  }
  
  
