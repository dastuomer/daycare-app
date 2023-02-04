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
import SearchDaycares from "./pages/SearchDaycares";
import ProviderSignup from "./pages/ProviderSignup";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  NO_GROUP,
} from "kbar";
import RenderResults from "./pages/RenderResults";
function App() {
  const actions = [
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "landing page home",
      perform: () => (window.location.pathname = "/"),
    },
    {
      id: "profile",
      name: "Profile",
      shortcut: ["p"],
      keywords: "profile user details",
      perform: () => (window.location.pathname = "/parent-profile"),
    },
  ];
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator>
            <KBarSearch />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <ChakraProvider>
        <KBarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/parent-profile" element={<ParentProfile />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<ParentOrDaycare />} />
              <Route path="/parent-signup" element={<ParentSignup />} />
              <Route path="/parent-signup/child" element={<ChildSignup />} />
              <Route path="/parent-signup/info" element={<AdditionalInfo />} />
              <Route path="/regina-childcare" element={<SearchDaycares />} />
              <Route path="/provider-signup" element={<ProviderSignup />} />
            </Routes>
          </BrowserRouter>
        </KBarProvider>
      </ChakraProvider>
    </KBarProvider>
  );
}

export default App;
