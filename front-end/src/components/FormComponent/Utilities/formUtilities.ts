import { Path, FieldValues } from "react-hook-form";
import { FormField } from "./FormField";

/**
 * Creates a text input field configuration
 * @param name - The name of the field (used as the key in the form data)
 * @param label - The label to display for the field
 * @returns A FormField object for a text input field
 */
export const createTextField = <T extends FieldValues>(
  name: Path<T>,
  label: string
): FormField<T> => ({
  name,
  label,
  type: "text",
});

/**
 * Creates a date input field configuration
 * @param name - The name of the field (used as the key in the form data)
 * @param label - The label to display for the field
 * @returns A FormField object for a date input field
 */
export const createDateField = <T extends FieldValues>(
  name: Path<T>,
  label: string
): FormField<T> => ({
  name,
  label,
  type: "date",
});

/**
 * Creates an email input field configuration
 * @param name - The name of the field (used as the key in the form data)
 * @param label - The label to display for the field
 * @returns A FormField object for an email input field
 */
export const createEmailField = <T extends FieldValues>(
  name: Path<T>,
  label: string
): FormField<T> => ({
  name,
  label,
  type: "email",
});

/**
 * Creates a password input field configuration
 * @param name - The name of the field (used as the key in the form data)
 * @param label - The label to display for the field
 * @returns A FormField object for a password input field
 */
export const createPasswordField = <T extends FieldValues>(
  name: Path<T>,
  label: string
): FormField<T> => ({
  name,
  label,
  type: "password",
});

/**
 * Creates a radio button group configuration
 * @param name - The name of the field (used as the key in the form data)
 * @param label - The label to display for the field
 * @param options - An array of options for the radio buttons
 * @returns A FormField object for a radio button group
 */
export const createRadioField = <T extends FieldValues>(
  name: Path<T>,
  label: string,
  options: { label: string; value: string }[]
): FormField<T> => ({
  name,
  label,
  type: "radio",
  options,
});

/**
 * Creates a dropdown/select field configuration
 * @param name - The name of the field (used as the key in the form data)
 * @param label - The label to display for the field
 * @param options - An array of options for the dropdown
 * @param multiple - Whether the select field allows multiple selections
 * @returns A FormField object for a select dropdown
 */
export const createSelectField = <T extends FieldValues>(
  name: Path<T>,
  label: string,
  options: { label: string; value: string }[],
  multiple: boolean = false
): FormField<T> => ({
  name,
  label,
  type: "select",
  options,
  multiple,
});

/**
 * Creates a checkbox field configuration
 * @param name - The name of the field (used as the key in the form data)
 * @param label - The label to display for the field
 * @returns A FormField object for a checkbox input field
 */
export const createCheckboxField = <T extends FieldValues>(
  name: Path<T>,
  label: string,
  options: { label: string; value: string }[]
): FormField<T> => ({
  name,
  label,
  type: "checkbox",
  options,
});

/**
 * Creates a textarea field configuration
 * @param name - The name of the field (used as the key in the form data)
 * @param label - The label to display for the field
 * @returns A FormField object for a textarea input field
 */
export const createTextareaField = <T extends FieldValues>(
  name: Path<T>,
  label: string
): FormField<T> => ({
  name,
  label,
  type: "textarea",
});

/**
 * Creates a range input field configuration
 * @param name - The name of the field (used as the key in the form data)
 * @param label - The label to display for the field
 * @param min - Minimum value for the range input
 * @param max - Maximum value for the range input
 * @returns A FormField object for a range input field
 */
export const createRangeField = <T extends FieldValues>(
  name: Path<T>,
  label: string,
  min: number,
  max: number
): FormField<T> => ({
  name,
  label,
  type: "range",
  min,
  max,
});

/**
 * Creates a file input field configuration
 * @param name - The name of the field (used as the key in the form data)
 * @param label - The label to display for the field
 * @returns A FormField object for a file input field
 */
export const createFileField = <T extends FieldValues>(
  name: Path<T>,
  label: string
): FormField<T> => ({
  name,
  label,
  type: "file",
});
