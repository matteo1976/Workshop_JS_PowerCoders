import React from 'react';

export default function Page9() {
    let str=`

    let myarray= new Array("a","b","c","d","e","f");


    // before ES6
    for(let idx=0;idx<=myarray.length;idx++){
        console.log(myarray[idx])
    }


    //with ES6
    
    //****FOR ...OF
    for (const item of myarray) {
        console.log(item)
    }

    
    //****FOR ...IN
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];        
        }
    }


    
    `
    return (

      <div className="pages">
        <h1> ES6</h1>
        <h3>For ... Of & For ... in </h3>
        <div className="textArea">
            <textarea name="textarea" rows="15" cols="100" >{str}</textarea>
        </div>
        <div className="testArrow">
            <b> For ..of </b> is for iterable object Array, Set, Map doesn't work with Object 
            <hr/>
            <b>For .. in</b> work with all and return the key
        </div> 
      </div>
    );
  }
  
  
