import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setWarehouses } from "./redux/store";
import warehouseData from "./data/warehouse.json";
import WarehouseList from "./components/WarehouseList";
import WarehouseDetail from "./components/WarehouseDetail";
import { Layout } from "antd";
import "antd/dist/reset.css"; // New Ant Design style reset

const { Header, Content } = Layout;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWarehouses(warehouseData));
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Header
          style={{ color: "#fff", fontSize: "24px", textAlign: "center" }}
        >
          Warehouse Management
        </Header>
        <Content style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<WarehouseList />} />
            <Route path="/warehouse/:id" element={<WarehouseDetail />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
