import React, { Component } from 'react'

class Counter extends Component {
    state = { 
        count: 0
     };

     handleIncrement = () => {
         console.log('increment clicked', this);
     }

render() { 

        return (<div>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                </div>
            );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state; //picking up the count from the state in a const
        return count === 0 ? 'Zero' : count; //if count = 0 return 'zero', otherwise return count
    }
}
 
export default Counter;