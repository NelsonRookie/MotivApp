// GoalsContext.js
import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("goals");
    return savedGoals ? JSON.parse(savedGoals) : [];
  });

  // Save goals to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const addGoal = (newGoal) => {
    if (newGoal.trim()) {
      setGoals((prevGoals) => [
        ...prevGoals,
        { id: Date.now(), text: newGoal, status: "In Progress" },
      ]);
    }
  };

  const deleteGoal = (id) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  const toggleStatus = (id) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              status:
                goal.status === "In Progress" ? "Completed" : "In Progress",
            }
          : goal
      )
    );
  };

  return (
    <GoalsContext.Provider value={{ goals, addGoal, deleteGoal, toggleStatus }}>
      {children}
    </GoalsContext.Provider>
  );
};

GoalsProvider.propTypes = {
  children: PropTypes.any,
};

export const useGoals = () => {
  return useContext(GoalsContext);
};
