import React from "react";
import ReactDom from "react-dom/client"


const App =()=>{
  return(  <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind</h1>)

}

const root= ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>)