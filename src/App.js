
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Order from './components/Orders/Order';
import About from './components/About/About';
import { CartLoaders } from './Loaders/Loaders';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => { 
            return fetch(`tShart.json`)
          },
          element: <Home></Home>
        },
        {
          path: "orders",
          loader:CartLoaders,
          element: <Order></Order>
        },
        {
          path: "about",
          element:<About></About>
        }
      ]
    },
    
  ]);
  return (
    <div >
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
