import { useState } from "react";
import Cats from "./components/Cats";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cats />
    </>
  );
}

export default App;
