
import React from 'react';
import ReactDOM from 'react-dom';
import Form from "./Form";
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

ReactDOM.render(<Form />, document.getElementById("root"))

