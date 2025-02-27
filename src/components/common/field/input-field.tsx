import { Input } from "@/components/ui/input/input";
import { FieldError, useFormContext } from "react-hook-form";

interface InputFieldProps {
    label: string;
    placeholder?: string;
    error: FieldError | undefined;
}

export const InputField = ({ label, placeholder, error }: InputFieldProps) => {
    const { register } = useFormContext();

    return (
        <div className="flex flex-col gap-2">
            <div>
                <label htmlFor={label} className="font-semibold capitalize">
                    {label}
                </label>
                {error && <p className="text-xs text-red-600">{error.message}</p>}
            </div>
            <Input {...register(`${label}`)} placeholder={placeholder} />
        </div>
    );
};
