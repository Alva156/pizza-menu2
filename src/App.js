// import logo from "./logo.svg";
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import ProductList from "./ProductList";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
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

import ProductList from "./ProductList";
import LoginForm from "./LogInForm";
import AdminPanel from "./AdminPanel";
import { Button } from "bootstrap";
import { useState } from "react";

export default function App() {
  // const fruits = ["Mango", "Banana", "Melon", "Papaya", "Apple"];
  // const [Count, setCount] = useState(0);
  // // function handleButton() {
  // //   setCount(Count + 1);
  // // }

  // function handleNext() {
  //   if (Count < 4) {
  //     setCount(Count + 1);
  //   }
  // }
  // function handlePrevious() {
  //   if (Count > 1) {
  //     setCount(Count - 1);
  //   }
  // }
  // return (
  //   <div>
  //     <h1>{fruits[Count]}</h1>
  //     <h1>count: {Count} </h1>
  //     <button onClick={handleNext}>Next</button>
  //     <button onClick={handlePrevious}>Previous</button>
  //   </div>
  // );

  return <ProductList />;
  // let isLoggedIn = true;
  // return (
  //   <div>
  //     (isLoggedIn ? <AdminPanel /> : <LoginForm />)
  //   </div>
  // );
}

// fdfsdfd
