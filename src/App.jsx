import { useState } from 'react';
// import React from './lib/react/React';

function App({ id }) {
  const [count, setCount] = useState(0);

  return (
    <div className="container" id={id}>
      <div className="one">
        <div className="two">
          <p>1</p>
          <p>2</p>
        </div>
        <div className="three">
          <p>3</p>
          <p>4</p>
        </div>
      </div>
      <p>this is a tes1</p>
      <div>
        <button onClick={() => setCout(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCout(count + 1)}>+</button>
      </div>
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="container" id={this.props.id}>
//         <div className="one">
//           <div className="two">
//             <p>111</p>
//             <p>222</p>
//           </div>
//           <div className="three">
//             <p>333</p>
//             <p>444</p>
//           </div>
//         </div>
//         <p>this is a tes!!!</p>
//       </div>
//     );
//   }
// }

export default App;
