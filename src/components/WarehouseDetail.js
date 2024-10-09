import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateWarehouse } from "../redux/store";
import { Form, Input, Checkbox, Button } from "antd";

const WarehouseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const warehouse = useSelector((state) =>
    state.warehouse.warehouses.find((w) => w.id === parseInt(id))
  );
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    cluster: "",
    space_available: "",
    is_live: false,
  });

  useEffect(() => {
    console.log(warehouse);
    if (warehouse) {
      setFormData(warehouse);
    }
  }, [warehouse]);
  console.log(formData);
  const handleSubmit = (values) => {
    const updatedWarehouse = { ...formData, ...values };
    dispatch(updateWarehouse(updatedWarehouse));
    navigate("/");
  };

  if (!warehouse) return <div>Warehouse not found</div>;

  return (
    <div>
      <h1>Edit {warehouse.name}</h1>
      {formData.name !== "" && (
        <Form
          layout="vertical"
          initialValues={formData}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Warehouse Name"
            name="name"
            rules={[{ required: true, message: "Please enter warehouse name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "Please enter city" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Cluster"
            name="cluster"
            rules={[{ required: true, message: "Please enter cluster" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Space Available"
            name="space_available"
            rules={[
              { required: true, message: "Please enter available space" },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item name="is_live" valuePropName="checked">
            <Checkbox>Live</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default WarehouseDetail;
