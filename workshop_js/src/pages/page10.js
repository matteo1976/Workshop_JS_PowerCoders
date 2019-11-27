import React from 'react';

export default function Page10() {
    let str=`

    var momsPromise = new Promise(function(resolve, reject) {
        momsSavings = 80000;
        priceOfPhone = 60000;
        if (momsSavings > priceOfPhone) {
          resolve({ brand: "iphone", model: "6s"});
        } else {
          reject("We donot have enough savings. Let us save some more money.");
        }
      });
      momsPromise
          .then(value=> 
                  console.log("Hurray I got this phone as a gift ", JSON.stringify(value))
              )
          .catch(reason=>
                  console.log("Mom coudn't buy me the phone because ", reason)
              )
          .finally(() =>
              console.log(
                  "Irrespecitve of whether my mom can buy me a phone or not, I still love her"));

    
    `
    return (

      <div className="pages">
        <h1> ES6</h1>
        <h3>Promissis</h3>
        <div className="textArea">
            <textarea name="textarea" rows="25" cols="100" >{str}</textarea>
        </div>
        <div className="testArrow">
            <b>finally</b> is ES9 feature
        </div> 
      </div>
    );
  }
  
  
