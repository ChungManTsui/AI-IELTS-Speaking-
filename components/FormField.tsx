import React from "react"
import { Controller, Control, FieldValues, Path } from "react-hook-form"
import { Input } from "@/components/ui/input"
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form"

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder?: string
  type?: "text" | "email" | "password" | "file"
  description?: string
}

const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder = "",
  type = "text",
  description,
}: FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input 
          className="input" 
          placeholder={placeholder} 
          type={type}
          {...field} 
        />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export default FormField
