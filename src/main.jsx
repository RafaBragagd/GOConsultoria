import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";

import React from 'react'
import ReactDOM from 'react-dom/client'

//Components
import Home from './FirstDegree/home.jsx'
import JobList from './FirstDegree/JobList.jsx'
import CandForm from './FirstDegree/candForm.jsx'
import App from "./app.jsx";

//CSS
import './CSS/index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"joblist",
        element: <JobList />,
      },
      {
        path:"candidateForm",
        element: <CandForm />,
      },
   ],
  },
])
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
