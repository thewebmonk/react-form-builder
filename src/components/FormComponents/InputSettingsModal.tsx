import React from "react";
import { Input, Form, Checkbox } from "antd";
import { UpdateParams, Validation } from "../../types";

type ElementSettingsModalProps = {
  id: string;
  label: string;
  name: string;
  setField: (id: string, updated: UpdateParams) => void;
  validation?: Validation;
};

const ElementSettingsModal = ({
  label,
  id,
  setField,
  validation,
  name,
}: ElementSettingsModalProps) => {
  const { min, max, required } = validation || {};
  return (
    <div className="settingsPopup">
      <Form layout="vertical">
        <Form.Item
          label="Label"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            value={label}
            type="text"
            onChange={(e) => {
              setField(id, { field: "label", value: e.target.value });
              // setField(id, {
              //   field: "name",
              //   value: e.target.value.toLowerCase(),
              // });
            }}
          />
        </Form.Item>
        <Form.Item
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            value={name}
            type="text"
            onChange={(e) =>
              setField(id, { field: "name", value: e.target.value })
            }
          />
        </Form.Item>
        {validation && (
          <>
            <Checkbox
              checked={required}
              onChange={(e) => {
                console.log(validation);
                setField(id, {
                  field: "validation",
                  value: { ...validation, required: e.target.checked },
                });
              }}
            >
              Is Required
            </Checkbox>
            <Form.Item label="Min Length">
              <Input
                value={min}
                type="number"
                onChange={(e) =>
                  setField(id, {
                    field: "validation",
                    value: { ...validation, min: parseInt(e.target.value) },
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Max Length">
              <Input
                value={max}
                type="number"
                onChange={(e) =>
                  setField(id, {
                    field: "validation",
                    value: { ...validation, max: parseInt(e.target.value) },
                  })
                }
              />
            </Form.Item>
          </>
        )}
      </Form>
    </div>
  );
};

export default ElementSettingsModal;
