import React from 'react';



function Page4() {
    let str=`
    ************** exmpl 1*************
    const myObj={
        name:"Matteo",
        surname:"Angelotti",
        age:43,
    };

    // before ES6

    var name=myObj.name;
    var surname=myObj.surname;
    var age=myobj.name;

    // with ES6
    let {name,surname,age}=myObj
    `

    return (

      <div className="pages">
        <h1> ES6</h1>
        <h3>Destructurin</h3>
        <div className="textArea">
            <textarea name="textarea" rows="15" cols="100" >{str}</textarea>
        </div>
      </div>
    );
  }
  
  export default Page4;
  
