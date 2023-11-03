import ReactDOM from "react-dom/client";
import "./index.css";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
