import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useState } from "react";
import Login from "./components/Login";
import { connect } from "react-redux";
import { useStateValue } from "./StateProvider";

function App(props) {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='App'>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='app__body'>
            <Router>
              <Sidebar />
              <Routes>
                <Route
                  path='/rooms/:id'
                  element={<Chat />}
                />
              </Routes>
            </Router>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
