
import React from 'react';
import ReactDOM from 'react-dom';
import Form from "./Form"
import confirmationPage from  "./confirmationPage"
import './index.css';

// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }


//   render() {
//     return (
//       <div>
//         <button className="square" onClick={() => this.setState({ value: 'x' })}>{this.state.value} </button>
//       </div>
//     );
//   }

// }


// ReactDOM.render(<Square />, document.getElementById("root"));https://jsfiddle.net/69z2wepo/130095/



ReactDOM.render(<Form />, document.getElementById("root"))

