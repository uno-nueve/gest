import { Field } from "@base-ui-components/react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
    label: string;
    placeholder?: string;
    register: UseFormRegister<any>;
    error: FieldError | undefined;
}

export const InputField = ({ label, placeholder, error, register }: InputFieldProps) => {
    return (
        <Field.Root name="nombre" className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
                <Field.Label className="font-bold capitalize">{label}</Field.Label>
                {error && (
                    <Field.Error className="text-sm text-red-600">{error.message}</Field.Error>
                )}
            </div>
            <Field.Control {...register(label)} placeholder={placeholder} />
        </Field.Root>
    );
};
