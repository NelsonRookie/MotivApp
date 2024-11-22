// Inspiration.js
import { useState } from "react";
import { useQuotes } from "../QuotesContext";

export default function Quotes() {
  const [customQuote, setCustomQuote] = useState("");
  const [randomQuote, setRandomQuote] = useState("");
  const { quotes, addQuote, favoriteQuotes, toggleFavorite } = useQuotes();

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  const addCustomQuote = () => {
    if (customQuote.trim()) {
      addQuote(customQuote);
      setCustomQuote(""); // Reset input after adding
    }
  };

  return (
    <div className="p-8 md:h-screen">
      <h1 className="text-2xl font-bold mb-6">Inspirational Quotes</h1>
      <button
        onClick={getRandomQuote}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Show Random Quote
      </button>

      {randomQuote && (
        <div className="mb-6 p-4 border rounded-lg bg-gradient-to-r from-pink-300 via-blue-300 to-white">
          <p id="dancing-script" className="text-lg">
            {randomQuote}
          </p>
          <button
            onClick={() => toggleFavorite(randomQuote)}
            className={`mt-4 px-4 py-2 rounded-md ${
              favoriteQuotes.includes(randomQuote)
                ? "bg-red-500 text-white"
                : "bg-gray-500 text-white font-semibold"
            } hover:bg-opacity-70`}
          >
            {favoriteQuotes.includes(randomQuote) ? "Unfavorite" : "Favorite"}
          </button>
        </div>
      )}

      <h2 className="text-md md:text-xl font-semibold md:mb-4">
        Add Your Custom Quote
      </h2>
      <textarea
        value={customQuote}
        onChange={(e) => setCustomQuote(e.target.value)}
        placeholder="Write your custom quote here..."
        className="mb-4 border rounded-md p-2 w-full md:w-[50%]"
        rows="3"
      />
      <button
        onClick={addCustomQuote}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 block"
      >
        Add Quote
      </button>

      <h2 className="text-xl font-semibold mb-4">Favorite Quotes</h2>
      {favoriteQuotes.length > 0 ? (
        <ul className="list-disc pl-5">
          {favoriteQuotes.map((quote, index) => (
            <li key={index} className="mb-2">
              {quote}
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite quotes yet!</p>
      )}
    </div>
  );
}
