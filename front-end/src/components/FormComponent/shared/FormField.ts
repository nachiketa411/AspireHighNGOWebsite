import { Path, FieldValues, DefaultValues } from "react-hook-form";

export interface FormField<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type:
    | "text"
    | "email"
    | "password"
    | "tel"
    | "url"
    | "number"
    | "date"
    | "time"
    | "datetime-local"
    | "color"
    | "textarea"
    | "select"
    | "checkbox"
    | "radio"
    | "range"
    | "file";
  options?: { label: string; value: string }[];
  multiple?: boolean; // For select fields
  min?: number; // For range inputs
  max?: number; // For range inputs
}
