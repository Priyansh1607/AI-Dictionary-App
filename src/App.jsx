import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { GoogleGenAI } from "@google/genai";
import Path from "./util/Path";
import { useNavigate } from "react-router";

const App = () => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState();
  const [loading, setloading] = useState(false);
  const [recent, setRecent] = useState([]);
  const [toggle, setToggle] = useState(() => {
    const stored = localStorage.getItem("toggle");
    return stored ? JSON.parse(stored) : false;
  });
  const navigate = useNavigate();
  const handleRecent = (e) => {
    let a = e.target.textContent;
    setWord(a);
    getResult(a);
    navigate(-1);
  };
  const handleClear = () => {
    setWord("");
    setResult("");
  };
  const aiRef = useRef();

  useEffect(() => {
    aiRef.current = new GoogleGenAI({
      apiKey: import.meta.env.VITE_GEMINI_API_KEY,
    });
    const storedRecents = JSON.parse(localStorage.getItem("recentWords"));
    if (storedRecents?.length) {
      setRecent(storedRecents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toggle", JSON.stringify(toggle));
  }, [toggle]);

  async function getResult(a) {
    try {
      setloading(true);
      const response = await aiRef.current.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `As a dictionary AI, provide comprehensive details for the word "${
          a || word
        }" in the following format:
          1. Word 🔤
          2. Pronunciation in English and Hindi 🗣️
          3. Meaning in English with examples 📚
          4. Meaning in Hindi with examples 📖
          5. Definition 📝
          6. Example Sentences 📋
          7. Synonyms 🔄
          8. Antonyms ⚡
          9. Similar Words 🔤
          10. Fun Fact/Usage Tip 💡`,
      });
      setResult(response.text);
    } catch (error) {
      console.error("Error generating content:", error);
      setResult(
        "Sorry, there was an error processing your request. Please try again."
      );
    } finally {
      setloading(false);
    }
  }
  localStorage.setItem("theme", toggle);
  return (
    <>
      <Path
        toggle={toggle}
        handleClear={handleClear}
        getResult={getResult}
        setWord={setWord}
        word={word}
        setToggle={setToggle}
        loading={loading}
        result={result}
        recent={recent}
        setRecent={setRecent}
        handleRecent={handleRecent}
      />
    </>
  );
};

export default App;
