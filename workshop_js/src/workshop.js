import React from 'react';
import logo from './logo.svg';
import Page1 from './pages/Page1';
import Page2 from './pages/page2';
import next from './next.svg';
import prev from './previous.svg';



export default class Workshop extends React.Component{

    state={
        currentIndex:0        
    }

    Visualpage=()=>{
        let index=this.state.currentIndex;
        switch (index) {
            case 0:
                return <Page1/>
                break;
            case 1:
                return <Page2/>
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