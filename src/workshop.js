//**HELP
/* use of Hook
*/


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
import Page9 from './pages/page9';
import Page10 from './pages/page10';
import Page11 from './pages/page11';
import Page12 from './pages/page12';
import Page13 from './pages/page13';
import Page14 from './pages/page14';

import next from './next.svg';
import prev from './previous.svg';
import evolution from './img/evolution1.jpeg'


export default class Workshop extends React.Component{

    state={
        currentIndex:0        
    }

    //** HELP    
    //*  use of rooting *** see react root
    //*  https://reacttraining.com/react-router/web/guides/quick-start
    //** */
    Visualpage=()=>{
        let index=this.state.currentIndex;
        switch (index) {
            case 1:
                return <Page1/>
            case 2:
                return <Page2/>
            case 3:
                return <Page3/>
            case 4:
                return <Page4/>
            case 5:
                return <Page5/>
            case 6:
                return <Page6/>
            case 7:
                return <Page7/>
            case 8:
                return <Page8/>
            case 9:
                return <Page9/>
            case 10:
                return <Page10/>
            case 11:
                return <Page11/>
            case 12:
                return <Page12/>
            case 13:
                return <Page13/>
            case 14:
                return <Page14/>
        
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
                    </div>
                :
                    null
                }
                <div className="controll">
                    {this.state.currentIndex>0 ? 
                        <img src={prev} className="prev" alt="prev" onClick={this.decrementState}/>
                    :
                        null
                    }        
                    <img src={next} className="next" alt="next" onClick={this.incrementState} />
                </div>
            </div>
        );
    };
};