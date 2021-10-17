import React, { useState } from "react";
import { elementToComponent } from "../utils";
import { FormElement, UpdateParams } from "../types";
import { Form, Button } from "antd";

const FormContainer = () => {
  const data: Array<FormElement> = [];

  const [state, setState] = useState(data);
  const setField = (id: string, updated: UpdateParams) => {
    setState(
      state.map((ele: FormElement) => {
        if (ele.id === id) {
          return { ...ele, [updated.field]: updated.value };
        } else {
          return ele;
        }
      })
    );
  };
  const deleteField = (id: string) => {
    console.log(id, state);
    setState(state.filter((ele: FormElement) => ele.id !== id));
  };
  const handleDrop = (e: any) => {
    const addElementdata: FormElement = JSON.parse(
      e.dataTransfer.getData("element")
    );
    setState([...state, addElementdata]);
  };

  return (
    <div
      className="container"
      onDrop={handleDrop}
      onDragStart={(e) => e.preventDefault()}
      onDragOver={(e) => e.preventDefault()}
    >
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={() => {}}
        onFinishFailed={() => {}}
        autoComplete="off"
      >
        {state.map((element: FormElement, index: number) => {
          const Element = elementToComponent[element.type];
          return (
            <Element
              key={element.id}
              {...{ ...element, setField, deleteField }}
            />
          );
        })}
        <Form.Item>
          <Button type="primary" className="mt-4 w-100" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormContainer;
