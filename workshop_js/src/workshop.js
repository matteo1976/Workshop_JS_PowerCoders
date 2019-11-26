import React from 'react';
import logo from './logo.svg';
import Page1 from './pages/Page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/page6';
import Page7 from './pages/page7';
import Page8 from './pages/page8';

import next from './next.svg';
import prev from './previous.svg';
import evolution from './img/evolution1.jpeg'


export default class Workshop extends React.Component{

    state={
        currentIndex:0        
    }

    Visualpage=()=>{
        let index=this.state.currentIndex;
        switch (index) {
            case 1:
                return <Page1/>
                break;
            case 2:
                return <Page2/>
                break;
            case 3:
                return <Page3/>
                break;
            case 4:
                return <Page4/>
                break;
            case 5:
                return <Page5/>
                break;
            case 6:
                return <Page6/>
                break;
            case 7:
                return <Page7/>
                break;
            case 8:
                return <Page8/>
                break;
                                
            default:
                break;
        }
    }

    incrementState=()=>{
        let {currentIndex}=this.state
        this.setState({currentIndex:currentIndex+1})
    }
    decrementState=()=>{        
        let {currentIndex}=this.state
        this.setState({currentIndex:currentIndex-1})
    }


    render(){
        
        return(
            <div className="container">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="workshop">
                    {this.Visualpage()}
                </div>
                {this.state.currentIndex===0 ? 
                <div>
                        <img src={evolution} alt="evolution js" className="evolution "/>
                </div>:
                null}


                <div className="controll">

                {this.state.currentIndex>0 ? 
                    <img src={prev} className="prev" alt="prev" onClick={this.decrementState}/>
                :
                null}        
                <img src={next} className="next" alt="next" onClick={this.incrementState} />

                </div>
            </div>
        );
    };
};