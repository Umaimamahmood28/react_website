import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Overview from "./pages/Overview";
import Inventory from "./pages/Inventory";
import Settings from "./pages/Settings";
import AddProduct from "./pages/AddProduct";


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
      path="/add-product"
      element={
        <Layout>
          <AddProduct />
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