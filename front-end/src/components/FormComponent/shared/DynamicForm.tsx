import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";
import { FieldValues } from "react-hook-form";
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
import { FormField } from "../RegistrationForm/RegistrationFormSchema";

interface DynamicFormProps<T extends FieldValues> {
  schema: ZodSchema<T>;
  fields: FormField<T>[];
  onSubmit: (data: T) => void;
}

const DynamicForm = <T extends FieldValues>({
  schema,
  fields,
  onSubmit,
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
      case "date":
        return <Input type={field.type} {...register(field.name)} />;
      case "textarea":
        return <TextArea {...register(field.name)} />;
      case "select":
        return (
          <Select {...register(field.name)}>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        );
      case "checkbox":
        // Handle multiple checkboxes as an array of values
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
          // Handle a single checkbox (boolean value)
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
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default DynamicForm;
