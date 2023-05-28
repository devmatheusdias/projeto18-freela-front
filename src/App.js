import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Followers from "./pages/Followers";
import UserProfile from "./pages/UserProfile";
import NewPost from "./pages/NewPost";
import Home from "./pages/Home";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";

function App() {

  const [token, setToken] = useState("");

  return (
    <>
    <BrowserRouter>
      <UserContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/followers' element={<Followers />} />
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/newpost' element={<NewPost />} />
          <Route path='/myprofile' element={<MyProfile />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
