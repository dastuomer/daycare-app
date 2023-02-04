import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import ParentProfile from "./pages/ParentProfile";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/parent-profile" element={<ParentProfile />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
