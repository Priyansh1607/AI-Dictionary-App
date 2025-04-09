import React from "react";
import { Route, Routes } from "react-router";
import Recents from "../components/Recents";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
const Path = ({
  toggle,
  getResult,
  setWord,
  word,
  handleClear,
  setToggle,
  result,
  loading,
  recent,
  setRecent,
  handleRecent,
}) => {
  return (
    <>
      <div
        className={`min-h-screen transition-all duration-500 ease-in-out ${
          toggle ? "bg-[#F1EFE8] text-black" : "bg-[#021526] text-white"
        }`}
      >
        <Navbar toggle={toggle} setToggle={setToggle} />
        <div className="pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  toggle={toggle}
                  handleClear={handleClear}
                  getResult={getResult}
                  setWord={setWord}
                  word={word}
                  loading={loading}
                  result={result}
                  recent={recent}
                  setRecent={setRecent}
                />
              }
            />
            <Route
              path="/history"
              element={
                <Recents
                  handleRecent={handleRecent}
                  recent={recent}
                  setRecent={setRecent}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Path;
