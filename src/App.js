import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuoteGenerator from "./components/QuoteGenerator";
import BookmarksPage from "./components/BookmarksPage";
const App = () => {
  const [bookmarks, setBookmarks] = useState([]); // new state to store bookmarks
  const [selectedItem, setSelectedItem] = useState("home");

  const handleClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <Router>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "left" }}>
          <nav>
            <ul>
              <li
                className={selectedItem === "home" ? "selected-item" : ""}
                onClick={() => handleClick("home")}
              >
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div style={{ display: "flex", alignItems: "right" }}>
          <nav>
            <ul>
              <li
                className={selectedItem === "bookmarks" ? "selected-item" : ""}
                onClick={() => handleClick("bookmarks")}
              >
                <Link to="/bookmarks">Bookmarks</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          exact
          element={
            <QuoteGenerator bookmarks={bookmarks} setBookmarks={setBookmarks} />
          }
        />
        <Route
          path="/bookmarks"
          element={<BookmarksPage bookmarks={bookmarks} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
