import React from 'react';



function Page2() {
    return (
        <div className="pages">
            <h1> What is ECMAScript</h1>
            <h3>from wikipedia</h3>
            <div>
                <ul>
                    <li>
                        <h3>June 1997</h3>
                        <p>First edition</p>
                    </li>
                    <li>
                        <h3>December 1999</h3>
                        <p>Added regular expressions, better string handling, new control statements, 
                            try/catch exception handling, tighter definition of errors, 
                            formatting for numeric output and other enhancements
                        </p>
                    </li>
                    <li>
                        <h3>December 2009</h3>
                        <p>
                            Adds "strict mode," a subset intended to provide more thorough error checking and avoid error-prone constructs. 
                            Clarifies many ambiguities in the 3rd edition specification, and accommodates behaviour of real-world 
                            implementations that differed consistently from that specification. Adds some new features, 
                            such as getters and setters, library support for JSON, and more complete reflection on object properties
                        </p>
                    </li>
                    <li>
                        <h3>June 2011</h3>
                        <p>
                        This edition 5.1 of the ECMAScript standard is fully aligned with third edition of the international standard ISO/IEC 16262:2011.
                        </p>
                    </li>
                    <li>
                        <h3>June 2015[11]</h3>
                        <p>
                        ECMAScript 2015 (ES6) (http://es6-features.org)
                                <ul class="es">
                                    <li>Arrow Functions</li>
                                    <li>Classes</li>
                                    <li>String interpolation</li>
                                    <li>Destructuring</li>
                                    <li>Default value</li>
                                    <li>Spread,Spread + Object Literals,Spread parameters</li>
                                    <li>Let,Const</li>
                                    <li>For..of</li>
                                    <li>function* Iterators and generator</li>
                                    <li>Modules & Module Loaders (import export)  </li>
                                    <li>Map,Set</li>
                                    <li>Inheritable extends class</li>
                                    <li>Promises</li>
                                </ul>
                        </p>
                    </li>
                    <li>
                        <h3>June 2016</h3>
                        <p>
                        ECMAScript 2016 (ES7)
                        <ul class="es">
                                    <li>Array.prototype.includes</li>
                                    <li>Exponentiation Operator</li>
                                    <li>await, async keywords </li>
                        </ul>
                        
                        </p>
                    </li>
                    <li>
                        <h3>June 2017</h3>
                        <p>
                        ECMAScript 2017 (ES8)
                        <ul class="es">
                                    <li>await, async with Promises </li>
                                    <li>Object.values/Object.entries</li>
                                    <li>String padding</li>
                        </ul>

                        </p>
                    </li>
                    <li>
                        <h3>June 2018</h3>
                        <p>
                        ECMAScript 2017 (ES9)
                        <ul class="es">
                                    <li>Promise.prototype.finally</li>
                                    <li>Object.values/Object.entries</li>
                                    <li>String padding</li>
                        </ul>

                        </p>
                    </li>
                    <li>
                        <h3>June 2019</h3>
                        <p>
                            ECMAScript 2017 (ES10)
                            <ul class="es">
                                        <li>Array.Flat()</li>
                                        <li>Array.flatMap()</li>
                                        <li>Object.fromEntries()</li>
                                        <li>String.trimStart() & String.trimEnd()</li>
                                        <li>5.Optional Catch Binding</li>
                                        <li>Array.Sort Stability</li>
                            </ul>

                        </p>
                    </li>
                </ul>
            </div> 
        </div>
    );
  }
  
  export default Page2;
