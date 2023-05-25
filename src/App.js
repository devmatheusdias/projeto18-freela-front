import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Post from "./pages/Home";
import Followers from "./pages/Followers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Post/>}/>
        <Route path='/followers' element={<Followers/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
