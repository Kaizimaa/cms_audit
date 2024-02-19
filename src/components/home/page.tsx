"use client";

import React, { useState } from "react";
import { Col, Divider, Row, Space, Card, Button, Modal } from "antd";
import Image from "next/image";
import { FaWpforms } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const lhaClick = () => {
    router.push('/LHA');
  };
  const kkaClick = () => {
    router.push('/KKA');
  };

  return (
    <div className="bg-abuu">
      <Divider orientation="center">
        <div className="text-black">
          <h1>SELAMAT DATANG</h1>
          <span>NAMA</span>
        </div>
      </Divider>
      <Row gutter={[48, 48]} justify={"center"}>
        <Col span={4}>
          <Button type="text" onClick={showModal}>
            <Space direction="vertical" size={16}>
              <Card
                className="box-border 1px white"
                hoverable
                cover={
                  <Image
                    src="/logonew.png"
                    alt="logo Daily Report"
                    width={150}
                    height={100}
                  />
                }
              >
                <h1 className="flex justify-center items-center">
                  Audit Wilayah
                </h1>
              </Card>
            </Space>
          </Button>
          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className=" items-center justify-between justify-items-center">
                <Button type="link" onClick={kkaClick}>
                  <div className="width-30">
                    <FaWpforms />
                  </div>
                  <div>
                    <p>KKA</p>
                  </div>
                </Button>
              <Button type="link" onClick={lhaClick}>
                  <div className="width-30">
                    <RiFilePaper2Line />
                  </div>
                  <div>
                    <p>LHA</p>
                  </div>
              </Button>
            </div>
          </Modal>
        </Col>
        <Col span={4}>
          <Button type="text" onClick={showModal}>
            <Space direction="vertical" size={16}>
              <Card
                className="box-border 1px white"
                hoverable
                cover={
                  <Image
                    src="/logonew.png"
                    alt="logo Weekly report"
                    width={150}
                    height={100}
                  />
                }
              >
                <h1 className="flex justify-center items-center">Audit Area</h1>
              </Card>
            </Space>
          </Button>
          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Button type="link" onClick={kkaClick}>
                <div>
                  <FaWpforms className="icon" />
                </div>
                <div>
                  <p>KKA</p>
                </div>
              </Button>
              <Button type="link" onClick={lhaClick}>
                <div>
                  <div>
                    <RiFilePaper2Line className="icon" />
                  </div>
                  <div>
                    <p>LHA</p>
                  </div>
                </div>
              </Button>
          </Modal>
        </Col>
        {/* <Col span={4}>
          <Space direction="vertical" size={16}>
            <Card
              className="box-border 1px white"
              hoverable
              cover={
                <Image
                  src="/logonew.png"
                  alt="logo Mounthly report"
                  width={150}
                  height={100}
                />
              }
            >
              <h1 className="flex justify-center items-center">
                Mounthly Report
              </h1>
            </Card>
          </Space>
        </Col>
        <Col span={4}>
          <Space direction="vertical" size={16}>
            <Card
              className="box-border 1px white"
              hoverable
              cover={
                <Image
                  src="/logonew.png"
                  alt="logo Semester"
                  width={150}
                  height={100}
                />
              }
            >
              <h1 className="flex justify-center items-center">Semester</h1>
            </Card>
          </Space>
        </Col>
        <Col span={4}>
          <Space direction="vertical" size={16}>
            <Card
              className="box-border 1px white"
              hoverable
              cover={
                <Image
                  src="/logonew.png"
                  alt="logo Tahunan"
                  width={150}
                  height={100}
                />
              }
            >
              <h1 className="flex justify-center items-center">Tahunan</h1>
            </Card>
          </Space>
        </Col> */}
      </Row>
    </div>
  );
};
export default HomePage;
