import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Index from "./Pages/Index";
import Missing from "./Pages/Missing";

function App() {

   const [project] = useState('VoteX')
   const [unreadMessage] = useState(true)
   
   return (
      <>
         <Routes>
            <Route 
               path="/" 
               element={
                  <Index
                     project={project}
                     title="Overview"
                     unreadMessage={unreadMessage}
                  />
               }>
            </Route>
            <Route 
               path="*" 
               element={
                  <Missing
                     project={project}
                     title="Page Not Found"
                  />
               }>
            </Route>
         </Routes>
      </>
   )
}

export default App
