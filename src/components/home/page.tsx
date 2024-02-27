'use client';

import React from "react";
import { Layout } from "antd";
import SideMenu from "./_components/sidemenu";

const Content = Layout

const HomePage = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu />
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360 }}>Content</div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default HomePage;
