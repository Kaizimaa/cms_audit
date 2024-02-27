
import { Layout } from 'antd';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const { Sider } = Layout;

const SideMenu = () => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false);



  const onCollapse = setCollapsed;
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" onClick={() => router.push('/')}>
          Dashboard
        </Menu.Item>
        <Menu.SubMenu key="sub1" title="Submenu">
          <Menu.Item key="2" onClick={() => router.push('/submenu1')}>
            Submenu 1
          </Menu.Item>
          <Menu.Item key="3" onClick={() => router.push('/submenu2')}>
            Submenu 2
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
