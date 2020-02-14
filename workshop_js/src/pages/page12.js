import React from 'react';

export default function Page12() {
    let str=`

    function myFunction(param1,param2,){....}
    

    let myArray[param1,param2,param3]
    function myFunction(myArray)

    // ES6
    function myFunction(...param){
        //param is an array
        don't need use arguments
    }

    //***************************************
    /// not primitive
   let a={ a:1,b:2,c:3};
   let b=a;
    a.a=8;
    
    //console.log(b)  ***?????

    ************
    let b =Object.assign({},a);

    //****** or spread operator

    let b={...a}

    ******** concat mit spread *****
    a=[a,b,c,d];
    b=[1,2,3,4];
    c= [...a,...b];
    d= [...a,e,f,g];
    `
    
    
    return (
        
      <div className="pages">
        <h1> ES6</h1>
        <h3>Spread  / parameters or ObjectAarray literal</h3>
        <div className="textArea">
            <textarea name="textarea" rows="25" cols="100" >{str}</textarea>
        </div>
        <div className="testArrow" style={{textAlign:"left"}}>
            <h2> Attention!!!!!</h2>    
            <p>Primitive object (numbers,string) are  by value</p>
            <p>not primitive object (object, array, map ...ecc) are by reference</p>       
            <p><a href="https://repl.it/@matteo1976/Let-Js6" target="_blank"> example</a></p>
        </div> 
        
      </div>
    );
  }
  
  
