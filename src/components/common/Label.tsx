import React from "react";
import { DeleteOutlined } from "@ant-design/icons";

type labelProps = {
  label: string;
  handleDelete: () => void;
};

const Label = ({ label, handleDelete }: labelProps) => {
  return (
    <div className="label-with-action">
      <span>{label}</span>
      <div>
        <DeleteOutlined onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Label;
