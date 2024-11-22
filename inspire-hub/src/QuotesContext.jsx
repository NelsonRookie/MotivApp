import { createContext, useState, useContext, useEffect } from "react";
import { initialQuotes } from "./qoutes";
import PropTypes from "prop-types";

const QuotesContext = createContext();

export const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState(() => {
    const savedQuotes = localStorage.getItem("quotes");
    return savedQuotes ? JSON.parse(savedQuotes) : initialQuotes;
  });

  const [favoriteQuotes, setFavoriteQuotes] = useState(() => {
    const savedFavorites = localStorage.getItem("favoriteQuotes");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);

  useEffect(() => {
    localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteQuotes));
  }, [favoriteQuotes]);

  const addQuote = (newQuote) => {
    setQuotes((prevQuotes) => [...prevQuotes, newQuote]);
  };

  const toggleFavorite = (quote) => {
    setFavoriteQuotes((prevFavorites) =>
      prevFavorites.includes(quote)
        ? prevFavorites.filter((fav) => fav !== quote)
        : [...prevFavorites, quote]
    );
  };

  return (
    <QuotesContext.Provider
      value={{ quotes, favoriteQuotes, addQuote, toggleFavorite }}
    >
      {children}
    </QuotesContext.Provider>
  );
};

QuotesProvider.propTypes = {
  children: PropTypes.any,
};

export const useQuotes = () => {
  return useContext(QuotesContext);
};
