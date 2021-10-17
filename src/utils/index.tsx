import Input from "../components/FormComponents/Input";
import Checkbox from "../components/FormComponents/Checkbox";
import InputNumber from "../components/FormComponents/InputNumber";

export const getElement = (value: string) => {
  switch (value) {
    case "text":
      return Input;
    case "number":
      return InputNumber;
    case "checkbox":
      return Checkbox;
    default:
      return Input;
  }
};

export const elementToComponent: any = {
  text: Input,
  number: InputNumber,
  checkbox: Checkbox,
};
