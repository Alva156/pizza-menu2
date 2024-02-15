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

export default function App() {
  return <ProductList />;
  // let isLoggedIn = true;
  // return (
  //   <div>
  //     (isLoggedIn ? <AdminPanel /> : <LoginForm />)
  //   </div>
  // );
}

// fdfsdfd
