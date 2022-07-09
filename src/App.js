// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//         <p>
//         ID:         1,
// 				Content:    "しゅくだい",
// 				IsComplete: true,
//         </p>
//         <p>
//         ID:         2,
// 				Content:    "おつかい",
// 				IsComplete: true,
//         </p>
//         <p>
//         ID:         3,
// 				Content:    "さんぽ",
// 				IsComplete: false,
//         </p>

//       </header>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import ApiFetch from './components/ApiFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ApiFetch />


      </header>
    </div>
  );
}

export default App;