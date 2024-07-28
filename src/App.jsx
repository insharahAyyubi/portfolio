import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education/Education";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </>
  );
};

export default App;
