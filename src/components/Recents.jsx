import React from "react";

const Recents = ({ recent, handleRecent }) => {
  const groupedWords = recent.reduce((acc, word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(word);
    return acc;
  }, {});

  const sortedSections = Object.keys(groupedWords).sort();
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Search History</h1>

        {recent.length > 0 ? (
          sortedSections.map((letter) => (
            <div key={letter} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-200 pb-2">
                {letter}
              </h2>
              <ul className="space-y-2 flex flex-wrap">
                {groupedWords[letter].map((word, index) => (
                  <li
                    key={`${letter}-${index}`}
                    onClick={handleRecent}
                    className="text-lg cursor-pointer hover:text-blue-500 transition-colors duration-200 pl-4"
                  >
                    {word},
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-xl">No recent searches</p>
        )}
      </div>
    </>
  );
};

export default Recents;
