import Dids from "./components/Dids";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dids />} />
        {/* <Route path="/orders" element={<Orders/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
