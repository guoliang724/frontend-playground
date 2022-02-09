import { Layout, Menu } from "antd";
import sytles from "./app.less";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import Body from "./component/Body/index";
import { useNavigate } from "react-router";
import "antd/dist/antd.min.css";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

function App() {
  const navigate = useNavigate();
  const handleFile = () => {
    navigate("/file");
  };
  const handleRedux = () => {
    navigate("/redux");
  };
  return (
    <div className="App">
      <Layout style={{ height: "100%", width: "100%" }}>
        <Sider width={200} className={sytles.sider}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="基础功能">
              <Menu.Item key="1" onClick={handleFile}>
                文件上传
              </Menu.Item>
              <Menu.Item key="2" onClick={handleRedux}>
                Redux测试
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<LaptopOutlined />}
              title="subnav 2"
            ></SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            ></SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "white" }}>Demos</Header>
          <Content>
            <Body />
          </Content>
          <Footer>3</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
