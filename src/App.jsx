import { useState } from "react";
import Welcome from "./components/welcome";

export default function App() {
  const [number, setNumber] = useState(10);
  return (
    <>
      <Welcome />
    </>
  );
}
