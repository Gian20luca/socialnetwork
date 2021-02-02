import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HomeComponent } from "./components/homeComponent/HomeComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact>
          <HomeComponent />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
