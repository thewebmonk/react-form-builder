import React, { useState } from "react";
import { Popover, Checkbox } from "antd";
import { CheckboxProps } from "../../types";
import ElementSettingsModal from "./InputSettingsModal";

const CheckboxFiled = ({ label, name, setField, id }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="form-group">
      <Popover
        content={<ElementSettingsModal {...{ setField, label, name, id }} />}
        title="Settings"
        placement="left"
      >
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        >
          {label}
        </Checkbox>
      </Popover>
    </div>
  );
};

export default CheckboxFiled;
