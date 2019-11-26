import React from 'react';

export default function Page7() {
    let str=`
    
    let name="Matteo";
    let age=43;

    let myText= \`Hello my name is \${ name} i have \${age}\`
    
    function printData(name='Ivan', age=20){
        console.log(\`Hello my name is \${ name} i have \${age}\`)
    }

    printData();
    
    `

    return (

      <div className="pages">
        <h1> ES6</h1>
        <h3>default value for the parameter</h3>
        <div className="textArea">
            <textarea name="textarea" rows="15" cols="100" >{str}</textarea>
        </div>
      </div>
    );
  }
  
  
