export type Validation = {
  min?: number;
  max?: number;
  len?: number;
  required?: boolean;
};

export type FormElement = {
  id: string;
  name: string;
  label: string;
  type: string;
  validation: Validation;
};

export type InputFiledProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  validation: Validation;
  setField: (id: string, updated: UpdateParams) => void;
  deleteField: (id: string) => void;
};

export type CheckboxProps = {
  id: string;
  name: string;
  label: string;
  setField: (id: string, updated: UpdateParams) => void;
  deleteField: (id: string) => void;
};

export type UpdateParams = {
  field: string;
  value: any;
};
