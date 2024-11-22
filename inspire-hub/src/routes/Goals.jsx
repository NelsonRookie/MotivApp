// Goals.js
import { useState } from "react";
import { useGoals } from "../GoalsContext";

export default function Goals() {
  const [newGoal, setNewGoal] = useState("");
  const { goals, addGoal, deleteGoal, toggleStatus } = useGoals();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">My Goals</h1>

      <div className="flex flex-col md:flex-row mb-2 gap-1 md:gap-2 md:mb-6">
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          placeholder="Add a new goal..."
          className="flex w-full rounded-md py-2 px-2 md:w-[50%] md:px-4 md:py-2 border md:rounded-l-md text-md text-gray-900 antialiased"
        />
        <button
          onClick={() => {
            addGoal(newGoal);
            setNewGoal("");
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Goal
        </button>
      </div>

      {goals.length === 0 ? (
        <p className="text-gray-500 italic">No goals added yet.</p>
      ) : (
        <ul className="space-y-4 list-disc md:list-none ">
          {goals.map((goal) => (
            <li
              key={goal.id}
              className="p-4 bg-white text-gray-900 font-semibold shadow rounded-lg flex flex-col sm:flex-row md:flex-row  gap-2 items-start md:items-center justify-between px-12 md:py-12"
            >
              <li className=" mr-2 md:text-lg hover:text-slate-500 transition duration-200 cursor-pointer">
                {goal.text}
              </li>

              <div className="flex items-center gap-4">
                <span
                  onClick={() => toggleStatus(goal.id)}
                  className={`cursor-pointer px-3 py-1 rounded-full text-sm font-semibold text-nowrap ${
                    goal.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {goal.status}
                </span>
                <button className="text-sm md:text-lg text-blue-500 hover:text-blue-700">
                  Edit
                </button>
                <button
                  onClick={() => deleteGoal(goal.id)}
                  className="text-sm md:text-lg text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
