import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';
import './App.css';

class App extends Component {
  state = { 
    counters: [
        {id:1 , value: 4},
        {id:2 , value: 0},
        {id:3 , value: 0},
        {id:4 , value: 0}
    ]
 } ;

handleIncrement= counter => {
  const counters = [...this.state.counters];
  const index= counters.indexOf(counter);
  counter[index]= {...counter};
  counters[index].value++;
  this.setState({counters});
};

handleReset= () =>{
  const counters= this.state.counters.map(c => {
    c.value=0 ;
     return c; 
    });
  this.setState({counters});
};
handleDelete= counterID =>{
  const counters= this.state.counters.filter(c=> c.id !== counterID);
  this.setState({counters: counters});    
};
  render() { 
    return (
    <React.Fragment>
     <Navbar totalCounter={this.state.counters.filter(c => c.value>0).length}
     />
      <main className='container'>
       <Counters 
         counters={this.state.counters}
         onDelete={this.handleDelete}
         onIncrement={this.handleIncrement}
         onReset={this.handleReset}
       />
      </main>
    </React.Fragment>
    );
  }
}
export default App;
