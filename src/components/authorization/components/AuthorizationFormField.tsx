import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC } from "react";
import { Control } from "react-hook-form";

// Типы для пропсов компонента
type AuthorizationFormFieldProps = {
  control: Control<any>; // Типизируем control от react-hook-form
  name: string; // имя поля, например, email или phone
  placeholder: string; // placeholder для input
  label: string; // метка для поля
};

const AuthorizationFormField: FC<AuthorizationFormFieldProps> = ({
  control,
  name,
  placeholder,
  label,
}) => {
  return (
    <FormField control={control} name={name} render={({ field }) => (
      <FormItem>
        <FormLabel className="text-white">{label}:</FormLabel>
        <FormControl>
          <Input
            className="iphone-se:w-[250px] text-white placeholder:text-gray-400"
            placeholder={placeholder}
            {...field}
          />
        </FormControl>
        <FormMessage className="text-red-400 text-sm" />
      </FormItem>
    )} />
  );
};

export default AuthorizationFormField;