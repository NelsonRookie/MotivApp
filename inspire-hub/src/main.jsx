import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Routes
import Root from "./routes/Root.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import Goals from "./routes/Goals.jsx";
import Inspirations from "./routes/Inspirations.jsx";
import Quotes from "./routes/Quotes.jsx";
import Index from "./routes/Index.jsx";
import Help from "./routes/Help.jsx";

import { GoalsProvider } from "./GoalsContext.jsx";
import { QuotesProvider } from "./QuotesContext.jsx";
import { InspirationProvider } from "./InspirationsContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "/help",
            element: <Help />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/goals",
            element: <Goals />,
          },
          {
            path: "/inspirations",
            element: <Inspirations />,
          },
          {
            path: "/quotes",
            element: <Quotes />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoalsProvider>
      <QuotesProvider>
        <InspirationProvider>
          <RouterProvider router={router} />
        </InspirationProvider>
      </QuotesProvider>
    </GoalsProvider>
  </StrictMode>
);
