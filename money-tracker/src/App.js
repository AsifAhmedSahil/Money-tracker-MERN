// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "./App.css";
// import Tracker from "./Pages/Tracker";
import router from "./Router/Router";

function App() {

  return (
    

    <>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
    {/* <Tracker/> */}
    </>
  );
}

export default App;
