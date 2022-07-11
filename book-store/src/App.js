import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import BookDetail from "./components/Book/BookDetail";
import About from "./components/About";

function App() {
  return (
    <>
      <React.Fragment>
        <header>
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/add" element={<AddBook />} exact />
            <Route path="/books" element={<Books />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/books/:id" element={<BookDetail />} exact />
          </Routes>
        </main>
      </React.Fragment>
    </>
  );
}

export default App;
// yarn add react-router-dom@6
