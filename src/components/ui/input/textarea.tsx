import { forwardRef, TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ ...props }, ref) => {
    return (
        <textarea
            className="w-full px-4 py-2 bg-white rounded-lg resize-none"
            ref={ref}
            {...props}
        />
    );
});
