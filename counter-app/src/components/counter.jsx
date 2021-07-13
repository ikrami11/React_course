import React, { Component } from 'react'

class Counter extends Component {  

    componentDidUpdate(prevProps, prevState){
        console.log('PrevProps', prevProps);
        console.log('PrevState', prevState);
    };

    componentWillUnmount(){
        console.log('counter - unmount'); //counter remouved from the dom - perfect timing for cleaning memory
    };

render() { 

        console.log('counter - rendered');

        return (<div>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

                    <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button>

                    <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
                </div>
            );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter; 
        return count === 0 ? 'Zero' : count; //if count = 0 return 'zero', otherwise return count
    }
}
 
export default Counter;