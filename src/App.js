import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import { Route, Routes} from "react-router-dom";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
    </div>
  );
}

export default App;
