import { Layout } from "antd";
import FormContainer from "./components/FormContainer";
import constants from "./constants";
import { FormElement } from "./types";
import { v4 } from "uuid";

function App() {
  const { Content, Sider } = Layout;
  const handleDragStart = (e: any, formElement: FormElement) => {
    e.dataTransfer.setData(
      "element",
      JSON.stringify({
        ...formElement,
        id: v4(),
        name: "label" + Math.round(Math.random() * 999),
      })
    );
  };
  return (
    <Layout>
      <Layout>
        <Sider width={300} className="site-layout-background side-bar">
          <div
            draggable
            onDragStart={(e) => handleDragStart(e, constants.textField)}
            className="form-element"
          >
            Text Filed
          </div>
          <div
            draggable
            onDragStart={(e) => handleDragStart(e, constants.numberField)}
            className="form-element"
          >
            Number Filed
          </div>
          <div
            draggable
            onDragStart={(e) => handleDragStart(e, constants.checkboxField)}
            className="form-element"
          >
            Checkbox
          </div>
        </Sider>
        <Layout style={{ padding: "0 24px 24px", minHeight: "100vh" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <FormContainer />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
