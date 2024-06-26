"use client";

import { z } from "zod";
import { Control, FieldPath } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  } from "@/components/ui/form";
import { authFormSchema } from "@/lib/utils";
import { Input } from "@/components/ui/input";


const formSchema = authFormSchema('sign-up');

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          <FormLabel className='form-label'>{label}</FormLabel>
          <div className='flex w-full flex-col'>
            <FormControl>
              <Input
                type={name === "password" ? "password" : "text"}
                placeholder={placeholder}
                className='input-class'
                {...field}
              />
            </FormControl>
            <FormMessage className='form-message' />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
