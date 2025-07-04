import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./components/layout/Mainlayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,

    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
