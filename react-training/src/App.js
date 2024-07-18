import "./App.css";
import "./index.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./modules/Home";
import About from "./modules/About";
import Todo from "./modules/Todo";

function App({ name, type, isTest = false }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// function App({ name, type, isTest = false }) {

//   test()
//   test2()
//   test3();
//   const welcomeMessage = "Welcome to the react training";
//   const userDetails = isTest ? `${name} is ${type}` : `Hello, ${name}`

//   return (
//     <div className="App">
//       <header
//         className="App-header"
//         style={{
//           backgroundColor: "green",
//           color: "#fefe54",
//         }}
//       >
//         <img src={logo} className="App-logo" alt="logo" />
//         <h4>{welcomeMessage}</h4>
//         <h6>{userDetails}</h6>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
