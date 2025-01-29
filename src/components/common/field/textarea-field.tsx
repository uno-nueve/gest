import { Textarea } from "@/components/ui/input/textarea";
import { FieldError, useFormContext } from "react-hook-form";

interface TextareaFieldProps {
    label: string;
    placeholder?: string;
    error: FieldError | undefined;
}

export const TextareaField = ({ label, placeholder, error }: TextareaFieldProps) => {
    const { register } = useFormContext();

    return (
        <div className="flex flex-col gap-2">
            <div>
                <label htmlFor={label} className="font-semibold capitalize">
                    {label}
                </label>
                {error && <p className="text-xs text-red-600">{error.message}</p>}
            </div>
            <Textarea {...register(`${label}`)} placeholder={placeholder} rows={3} />
        </div>
    );
};
