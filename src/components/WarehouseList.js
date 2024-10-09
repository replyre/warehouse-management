import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Input, Select, Table, Button, Row, Col } from "antd";

const { Search } = Input;
const { Option } = Select;

const WarehouseList = () => {
  const warehouses = useSelector((state) => state.warehouse.warehouses);
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [clusterFilter, setClusterFilter] = useState("");
  const [spaceLimit, setSpaceLimit] = useState("");
  const uniqueCities = [
    ...new Set(warehouses.map((warehouse) => warehouse.city)),
  ];
  const uniqueCluster = [
    ...new Set(warehouses.map((warehouse) => warehouse.cluster)),
  ];

  const filteredWarehouses = warehouses
    .filter((warehouse) =>
      warehouse.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((warehouse) => (cityFilter ? warehouse.city === cityFilter : true))
    .filter((warehouse) =>
      clusterFilter ? warehouse.cluster === clusterFilter : true
    )
    .filter((warehouse) =>
      spaceLimit ? warehouse.space_available <= spaceLimit : true
    );

  const columns = [
    {
      title: "Warehouse Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Cluster",
      dataIndex: "cluster",
      key: "cluster",
    },
    {
      title: "Space Available",
      dataIndex: "space_available",
      key: "space_available",
    },
    {
      title: "Live Status",
      dataIndex: "is_live",
      key: "is_live",
      render: (text) => (text ? "Live" : "Not Live"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button type="primary">
          <Link to={`/warehouse/${record.id}`}>View</Link>
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h1>Warehouse List</h1>
      <Row gutter={16} style={{ marginBottom: 20 }}>
        <Col span={8}>
          <Search
            placeholder="Search by name"
            onSearch={(value) => setSearch(value)}
            enterButton
          />
        </Col>
        <Col span={4}>
          <Select
            placeholder="Filter by City"
            value={cityFilter}
            onChange={setCityFilter}
            style={{ width: "100%" }}
          >
            <Option value="">All Cities</Option>
            {uniqueCities.map((city) => (
              <Option key={city} value={city}>
                {city}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={4}>
          <Select
            placeholder="Filter by Cluster"
            value={clusterFilter}
            onChange={setClusterFilter}
            style={{ width: "100%" }}
          >
            <Option value="">All Clusters</Option>
            {uniqueCluster.map((cluster) => (
              <Option key={cluster} value={cluster}>
                {cluster}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={4}>
          <Input
            placeholder="Space Limit"
            type="number"
            value={spaceLimit}
            onChange={(e) => setSpaceLimit(e.target.value)}
          />
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={filteredWarehouses}
        rowKey={(record) => record.id}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default WarehouseList;
