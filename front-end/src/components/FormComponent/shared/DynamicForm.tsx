import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";
import {
  FormContainer,
  Section,
  Label,
  Input,
  Select,
  TextArea,
  CheckBox,
  RadioGroup,
  Button,
} from "./styles";
import { FormField } from "./FormField";

interface DynamicFormProps<T extends FieldValues> {
  schema: ZodSchema<T>;
  fields: FormField<T>[];
  onSubmit: (data: T) => void;
  buttonLabel: string; // New prop for dynamic button label
}

const DynamicForm = <T extends FieldValues>({
  schema,
  fields,
  onSubmit,
  buttonLabel, // Destructure the new prop
}: DynamicFormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
  });

  const renderField = (field: FormField<T>) => {
    switch (field.type) {
      case "text":
      case "email":
      case "password":
      case "tel":
      case "url":
      case "number":
      case "date":
      case "time":
      case "datetime-local":
      case "color":
        return <Input type={field.type} {...register(field.name)} />;
      case "textarea":
        return <TextArea {...register(field.name)} />;
      case "select":
        return (
          <Select {...register(field.name)} multiple={field.multiple}>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        );
      case "checkbox":
        if (field.options && field.options.length > 1) {
          return (
            <div>
              {field.options.map((option) => (
                <label key={option.value}>
                  <CheckBox
                    type="checkbox"
                    value={option.value}
                    {...register(field.name)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          );
        } else {
          return <CheckBox type="checkbox" {...register(field.name)} />;
        }
      case "radio":
        return (
          <RadioGroup>
            {field.options?.map((option) => (
              <label key={option.value}>
                <CheckBox
                  type="radio"
                  value={option.value}
                  {...register(field.name)}
                />
                {option.label}
              </label>
            ))}
          </RadioGroup>
        );
      case "range":
        return (
          <Input
            type="range"
            {...register(field.name)}
            min={field.min}
            max={field.max}
          />
        );
      case "file":
        return (
          <Input
            type="file"
            {...register(field.name)}
            multiple={field.multiple}
          />
        );
      default:
        return null;
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <Section key={String(field.name)}>
            <Label>{field.label}:</Label>
            {renderField(field)}
            {errors[field.name]?.message && (
              <p className="text-danger">
                {errors[field.name]?.message as string}
              </p>
            )}
          </Section>
        ))}
        <Button type="submit">{buttonLabel}</Button>{" "}
        {/* Use the dynamic label */}
      </form>
    </FormContainer>
  );
};

export default DynamicForm;
