import React , { Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/layoutComponents/Header";
import HotelsBody from "./components/layoutComponents/HotelsBody";
import AddData from "./components/layoutComponents/AddData";
import { createBrowserRouter, Outlet ,RouterProvider } from "react-router-dom";
import Error from "./components/OldComponents/Error";




const App = () => {
  return (<>
            <Header className="sticky top-0 z-50"></Header>
            <Outlet/>
          </>);
  };

  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error />,
      children : [
        {
          path : "/",
          element: (<Suspense fallback={<h1>Loading....</h1>}>
                      <HotelsBody/>
                      </Suspense>),
        },
        {
          path : "/add-data",
          element: (<Suspense fallback={<h1>Loading....</h1>}>
                      <AddData />
                      </Suspense>),
        }
      ]
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App/>);
root.render(<RouterProvider router={appRoute} />);

// import React, { lazy, Suspense, useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/Body";
// //import About from "./components/About";
// import Contact from "./components/Contact";
// import Error from "./components/Error";
// import RestaurantMenu from "./components/RestaurantMenu";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import UserContext from "./utils/UserContext";
// import { Provider } from "react-redux";
// import appStore from "./utils/appStore";
// import Cart from "./components/Cart";

// //import Grocery from "./components/Grocery";

// // Chunking
// // Code Splitting
// // Dynamic Bundling
// // lazy Loading
// // on demand loading
// // dynamix imoprt

// const Grocery = lazy(() => import("./components/Grocery"));

// const About = lazy(() => import("./components/About"));

// const AppLayout = () => {
//   const [userName, setUserName] = useState();

//   //authentication
//   useEffect(() => {
//     // Make an API call and send username and password
//     const data = {
//       name: "Akshay Saini",
//     };
//     setUserName(data.name);
//   }, []);

//   return (
//     <Provider store={appStore}>
//       <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
//         <div className="app">
//           <Header />
//           <Outlet />
//         </div>
//       </UserContext.Provider>
//     </Provider>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: (
//           <Suspense fallback={<h1>Loading....</h1>}>
//             <About />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/grocery",
//         element: (
//           <Suspense fallback={<h1>Loading....</h1>}>
//             <Grocery />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/restaurants/:resId",
//         element: <RestaurantMenu />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter} />);
