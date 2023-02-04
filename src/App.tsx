import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import ParentProfile from "./pages/ParentProfile";
import LoginPage from "./pages/Login";
import ParentOrDaycare from "./pages/ParentOrDaycare";
import ParentSignup from "./pages/ParentSignup";
import ChildSignup from "./pages/ChildSignup";
import AdditionalInfo from "./pages/AdditionalInfo";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/parent-profile" element={<ParentProfile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<ParentOrDaycare />} />
          <Route path="/parent-signup" element={<ParentSignup />} />
          <Route path="/parent-signup/child" element={<ChildSignup />} />
          <Route path="/parent-signup/info" element={<AdditionalInfo />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
