import { Textarea } from "@/components/ui/input/textarea";
import { Field } from "@base-ui-components/react";
import { ReactNode } from "react";

export const InputField = ({
    label,
    type,
    placeholder,
}: {
    label: string;
    type: string;
    placeholder?: string;
}) => {
    return (
        <Field.Root className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <Field.Label className="font-bold">{label}</Field.Label>
                <Field.Error className="text-sm text-red-700" match="valueMissing">
                    Campo requerido
                </Field.Error>
            </div>
            <Field.Control
                required
                placeholder={placeholder}
                className="w-full px-4 py-2 h-8 rounded-lg max-w-[260px]"
                type={type}
                id={label?.toLowerCase()}
                name={label?.toLowerCase()}
            />
        </Field.Root>
    );
};

export const TextareaField = ({ label, placeholder }: { label: string; placeholder: string }) => {
    return (
        <Field.Root className="flex flex-col gap-2">
            <Field.Label className="font-bold">{label}</Field.Label>
            <Textarea
                id={label.toLowerCase()}
                name={label.toLowerCase()}
                placeholder={placeholder}
            />
        </Field.Root>
    );
};

export const FileField = ({ label }: { label: ReactNode }) => {
    return (
        <Field.Root className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <Field.Label className="flex items-center justify-center w-40 h-40 bg-white rounded-full text-neutral-300 hover:cursor-pointer">
                    {label}
                </Field.Label>
                <Field.Error className="text-sm text-red-700" match="valueMissing">
                    Campo requerido
                </Field.Error>
            </div>
            <Field.Control type="file" className="hidden" id="imagen" name="imagen" />
        </Field.Root>
    );
};
