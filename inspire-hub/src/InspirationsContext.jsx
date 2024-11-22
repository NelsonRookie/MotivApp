import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const InspirationContext = createContext();

export const InspirationProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("inspirations");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("inspirations", JSON.stringify(items));
  }, [items]);

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const editItem = (id, updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <InspirationContext.Provider
      value={{ items, addItem, editItem, deleteItem }}
    >
      {children}
    </InspirationContext.Provider>
  );
};

InspirationProvider.propTypes = {
  children: PropTypes.any,
};

export const useInspiration = () => {
  return useContext(InspirationContext);
};
