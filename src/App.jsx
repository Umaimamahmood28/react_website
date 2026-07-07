import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Overview from "./pages/Overview";
import Inventory from "./pages/Inventory";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Overview />
          </Layout>
        }
      />

      <Route
        path="/inventory"
        element={
          <Layout>
            <Inventory />
          </Layout>
        }
      />

      <Route
        path="/settings"
        element={
          <Layout>
            <Settings />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;