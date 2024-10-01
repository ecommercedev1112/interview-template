import React from "react";
import {
  Typography,
  Form,
  Input,
  Select,
  DatePicker,
  Divider,
  Button,
} from "antd";
import { useDispatch } from "react-redux";
import { ROLES } from "@/constants";
import { setInterviewOverview, setStep } from "@/store/slices/AppSlice";

const Overview = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    dispatch(
      setInterviewOverview({
        ...values,
        date: values.date.format("YYYY-MM-DD"),
      })
    );
    dispatch(setStep(1));
  };

  return (
    <React.Fragment>
      <Typography.Title level={4} style={{ textAlign: "center" }}>
        Interview Overview
      </Typography.Title>

      <Divider />

      <Form
        form={form}
        name="overview-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 400, width: "100%", margin: "0px auto" }}
        autoComplete="off"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Candidate Name"
          name="candidate"
          rules={[{ required: true, message: "Please input candidate name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Please select a role!" }]}
        >
          <Select>
            {ROLES.map((role: string, index: number) => (
              <Select.Option key={index} value={role}>
                {role}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Interviewer"
          name="interviewer"
          rules={[{ required: true, message: "Please input interviewer!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please select date!" }]}
        >
          <DatePicker style={{ width: "100%" }} format={"YYYY-MM-DD"} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default Overview;
