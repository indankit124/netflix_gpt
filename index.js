// import React from "react";
// import ReactDom from "react-dom/client";

// import Body from "./src/components/Body";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import Login from "./src/components/Login";
// import Browse from "./src/components/Browse";

// // ✅ App renders the persistent Header and RouterProvider
// const App = () => (
//   <div>
//     <RouterProvider router={appRouter} />
//   </div>
// );

// // ✅ Router config with Body as layout and children underneath
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       {
//         path: "/",
//         element: <Login/>,
//       },
//       {
//         path: "/browse",
//         element: <Browse />,
//       },
//     ],
//   },
// ]);

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<App />);







import React from "react";
import ReactDom from "react-dom/client";

import Body from "./src/components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./src/components/Login";
import Browse from "./src/components/Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
