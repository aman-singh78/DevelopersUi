import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Request from "./components/Request";
import Chat from "./components/Chat";
import Premeium from "./components/Premeium";
function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Login />} />
            <Route path="feed" element={<Feed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="connections" element={<Connections />} />
            <Route path="requests" element={<Request />} />
            <Route path="chat/:targetUserId" element={<Chat />} />
            <Route path="premeium" element={<Premeium />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
