import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';


class App extends Component {

  state = { 
    counters: [
        {id: 1, value: 0 },
        {id: 2, value: 0 },
        {id: 3, value: 0 },
        {id: 4, value: 0 }
    ]
 };

 constructor(){
   super();
   console.log('app-constructor'); //perfect place to initialize data
 };

 componentDidMount(){
   console.log('app-mounted'); //perfect place to do ajax calls and effect new data - get data from the server
 };



handleIncrement = counter => {
    
    const counters = [...this.state.counters]; //clone the state counters
    const index = counters.indexOf(counter); //index the array of counters 
    counters[index] = {...counter}; //clone the counter object received above
    counters[index].value++;

    this.setState({ counters });
};

handleDelete = (counterId) => {
    
    const counters = this.state.counters.filter( c => c.id !== counterId );
    this.setState({ counters });

};

handleReset = () => {

    const counters = this.state.counters.map( c => {
        c.value = 0;
        return c;
    } );

    this.setState({ counters });

};

  render() {

    console.log('app-rendered');

    return (

      <React.Fragment>

          <NavBar totalCounters ={this.state.counters.filter(c => c.value > 0).length} />

          <main className = "container">
            <Counters counters = {this.state.counters} onDelete = {this.handleDelete} onIncrement = {this.handleIncrement} onReset ={this.handleReset}/>
          </main>

      </React.Fragment>
      
    );
  }
}

export default App;
