import { useGoals } from "../GoalsContext";
import { useQuotes } from "../QuotesContext";
import { useInspiration } from "../InspirationsContext";

export default function Dashboard() {
  const { goals } = useGoals();
  const { favoriteQuotes } = useQuotes();
  const { items: inspirations } = useInspiration();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 ">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Goals Overview */}
        <div className="p-6 bg-blue-100 shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Goals</h2>
          <p className="text-gray-700">
            Track your current goals and progress.
          </p>
          {goals.length === 0 ? (
            <p className="text-gray-500 italic">No goals added yet.</p>
          ) : (
            <ul className="list-disc pl-5 mt-4 text-gray-600 font-semibold space-y-2">
              {goals.map((goal) => (
                <li key={goal.id}>{goal.text}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Inspirations Overview */}
        <div className="p-6 bg-blue-100 shadow-lg rounded-lg border border-gray-200">
          {" "}
          <h2 className="text-xl font-semibold mb-4 text-blue-800">
            {" "}
            Inspirations{" "}
          </h2>{" "}
          <p className="text-gray-700">
            A collection of ideas and inspirations.
          </p>{" "}
          {inspirations.length === 0 ? (
            <p className="text-gray-500 italic">No inspirations added yet.</p>
          ) : (
            <ul className="list-disc pl-5 mt-4 text-gray-600 font-semibold space-y-2">
              {" "}
              {inspirations.map((inspiration) => (
                <li key={inspiration.id}>
                  {" "}
                  {inspiration.text}{" "}
                  {inspiration.image && (
                    <img
                      src={inspiration.image}
                      alt="inspiration"
                      className="w-full h-auto object-cover rounded-md mt-2"
                    />
                  )}{" "}
                </li>
              ))}{" "}
            </ul>
          )}{" "}
        </div>

        {/* Quotes Display */}
        <div className="p-6 bg-blue-100 shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">
            Favorite Quotes
          </h2>
          {favoriteQuotes.length === 0 ? (
            <p className="text-gray-500 italic">No favorite quotes yet.</p>
          ) : (
            <ul className="list-disc pl-5 mt-4 text-gray-600 font-semibold space-y-2">
              {favoriteQuotes.map((quote, index) => (
                <li key={index}>{quote}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
