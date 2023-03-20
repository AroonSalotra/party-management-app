import "./App.css";
import MemberDisplay from "./components/MemberDisplay";
import PlayerList from "./data/player-list.json";
import Home from "./pages/Home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Character from "./pages/Character";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
