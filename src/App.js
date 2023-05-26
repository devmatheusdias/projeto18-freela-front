import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Post from "./pages/Home";
import Followers from "./pages/Followers";
import UserProfile from "./pages/UserProfile";
import NewPost from "./pages/NewPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Post/>}/>
        <Route path='/followers' element={<Followers/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/newpost' element={<NewPost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
