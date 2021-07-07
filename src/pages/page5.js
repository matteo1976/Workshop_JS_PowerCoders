import React from 'react';



function Page5() {
    let str=`
    ************** exmpl 1*************
    
    const field1="name";
    const field2="suername";


    const myObj={
        [field1]:"Hello",
        [field2]:"Angelotti",
        [20+23]:"is the age"
    };

    ************** exmpl 2*************
    const name="Matteo";
    const surname="Angelotti";
    const age=43;
    
    const myObj={name,surname,age}
    `

    return (

      <div className="pages">
        <h1> ES6</h1>
        <h3>Object Properties</h3>
        <div className="textArea">
            <textarea name="textarea" rows="15" cols="100" >{str}</textarea>
        </div>
      </div>
    );
  }
  
  export default Page5;
  
