import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/register" element={<h1>Register</h1>} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
