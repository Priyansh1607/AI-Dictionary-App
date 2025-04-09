import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import Markdown from "react-markdown";
import Loader from "./Loader";
const Home = ({
  toggle,
  getResult,
  setWord,
  word,
  handleClear,
  loading,
  result,
  setRecent,
}) => {
  const addToRecent = (newWord) => {
    setRecent((prev) => {
      const updated = [newWord, ...prev.filter((item) => item !== newWord)];
      localStorage.setItem("recentWords", JSON.stringify(updated));
      return updated;
    });
  };
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="w-[70%] my-10 m-auto flex flex-col items-center">
            <h1 className="text-[48px] text-center  font-semibold">
              AI Dictionary
            </h1>
            <p className="text-[30px] text-center tracking-wide">
              A Fresh Take on Word Definition & Meanings
            </p>
          </div>
          <div
            className={`flex items-center md:w-[60%] w-[90%] m-auto rounded-sm transition-all duration-300 ease-in-out border-[2px] border-solid hover:border-[#6EACDA] focus-within:border-[#6EACDA] ${
              toggle
                ? "bg-white border-[#D1D5DB] "
                : "bg-[#1F2937] border-[#374151] "
            }`}
          >
            <IoIosSearch className="ml-3 cursor-pointer size-6" />
            <input
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  getResult();
                  addToRecent(word);
                }
              }}
              onChange={(e) => setWord(e.target.value)}
              value={word}
              className="text-[18px] leading-none ml-1 bg-transparent placeholder-[#888888] border-none flex-1 outline-none w-full p-2 "
              type="search"
              placeholder="Search a Word..."
            />
            <button
              onClick={handleClear}
              className={`mr-3 p-1 rounded-full cursor-pointer ${
                toggle ? "hover:bg-[#dddddd]" : "hover:bg-slate-700"
              }`}
            >
              <MdOutlineClear size={20} />
            </button>
          </div>
          <hr className="my-7 w-[90%] md:w-[70%] m-auto" />
          {loading ? (
            <Loader />
          ) : (
            <div className=" md:w-[70%] w-[90%] m-auto pb-4">
              <Markdown>{result}</Markdown>
              <footer className=" mb-4">
                <p className="text-center py-2">
                  Made by{" "}
                  <a
                    href="https://www.linkedin.com/in/priyanshkhandelwal16/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[100%] text-blue-400 underline text-center"
                  >
                    @Priyansh Khandelwal
                  </a>{" "}
                  all rights reserved.
                </p>
              </footer>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
