import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import { About, Profile } from "../components";
import Page from "../components/Page/Page";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Page />} />
        <Route path="/profile" element={<Profile />} />F
        <Route path="/about" element={<About />} />
      </Switch>
    </Router>
  );
}
