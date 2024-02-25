'use client'

import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import "@/styles/globals.css";
import Image from "next/image";



const { Title } = Typography;

const API_URL = process.env.NEXT_PUBLIC_DATA_BASE_URL as string;

export default function LoginPage() {
const { push } = useRouter();

  const onFinish = async (e: any) => {
    e.preventDefault();
        const response = await fetch(API_URL + "/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
             username: e.currentTarget.username.value,
             password: e.currentTarget.password.value 
            }),
        });
        if (response.ok) {
          push("/");
        }
  }
  return (
    <div className="login">
    <div className="outline-none">
      <Image src="/example.jpg" alt="logo" width={650} height={800} />
    </div>
    <div className="login-page">
      <div className="flex justify-center mb-10">
            <Image src="/logonew.png" alt="logo cms" width={200} height={175} />
      </div>
      <div className="text-center mb-10">
      <Title level={3}>Hai , Selamat Datang Di Audit</Title>
      <Title level={4}>Masukan Nama Pengguna & Kata Sandi Anda !</Title>
      </div>
    

      <div className="w-full max-w-md">
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Masukkan nama pengguna!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Nama Pengguna"
              id="username"
              name="username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Masukkan kata sandi!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Kata Sandi"
              id="password"
              name="password"
            />
          </Form.Item>
          <Form.Item>
            <Button 
              type="primary" block
              style={{ backgroundColor: "#00008b", color: "white" }}
              htmlType="submit"
              className="w-full"
            >
              Masuk
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    </div>
  );
}
