import React, { Component } from 'react'

class Counter extends Component {
    state = { 
        value: this.props.value
     };

     handleIncrement = () => {
         console.log();
         this.setState({ value: this.state.value +1 })
     };

render() { 

        return (<div>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={ () => this.handleIncrement() } className="btn btn-secondary btn-sm">Increment</button>
                </div>
            );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state; //picking up the count from the state in a const
        return count === 0 ? 'Zero' : count; //if count = 0 return 'zero', otherwise return count
    }
}
 
export default Counter;