import React from "react";
import { Input, Form, Popover } from "antd";
import ElementSettingsModal from "./InputSettingsModal";
import { InputFiledProps } from "../../types";
import Label from "../common/Label";

const InputField = ({
  id,
  name,
  label,
  validation,
  type,
  setField,
  deleteField,
}: InputFiledProps) => {
  // const handleChange = (update: UpdateParams) => {
  //   const updatedElement: FormElement = {
  //     id,
  //     name,
  //     label,
  //     validation,
  //     type,
  //   };
  //   switch (update.field) {
  //     case "label":
  //       updatedElement.label = update.value;
  //       break;
  //     case "type":
  //       updatedElement.type = update.value;
  //       break;
  //     default:
  //   }
  //   setField(updatedElement);
  // };
  const { min, max, len, required } = validation;
  return (
    <div className="form-group">
      <Popover
        content={
          <ElementSettingsModal
            {...{ setField, label, name, id, validation }}
          />
        }
        title="Settings"
        placement="left"
      >
        <Form.Item
          label={<Label label={label} handleDelete={() => deleteField(id)} />}
          name={name}
          rules={[
            {
              required: required,
              message: `${label} is required !`,
              min: min,
              len: len,
              max: max,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Popover>
    </div>
  );
};

export default InputField;
