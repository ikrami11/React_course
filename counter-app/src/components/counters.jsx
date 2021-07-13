import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {

        console.log('counters - rendered');

        const {onReset, onDelete, onIncrement, counters} = this.props;

        return ( <div>
                    <button onClick = {onReset} className="btn btn-primary btm-sm m-2">Reset</button>
                    {counters.map( counter => <Counter key = {counter.id} onDelete = {onDelete} onIncrement = {onIncrement} counter = {counter} selected />)}
                </div> )
    }
}
 
export default Counters;