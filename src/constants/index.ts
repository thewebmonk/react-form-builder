import { FormElement } from "../types";

export const textField: FormElement = {
  id: "",
  name: "",
  label: "Label",
  type: "text",
  validation: { min: 2 },
};

export const numberField: FormElement = {
  id: "",
  name: "",
  label: "Label",
  type: "number",
  validation: { min: 2 },
};

export const checkboxField: FormElement = {
  id: "",
  name: "",
  label: "Label",
  type: "checkbox",
  validation: { min: 2 },
};

const constants = {
  textField,
  numberField,
  checkboxField,
};
export default constants;
