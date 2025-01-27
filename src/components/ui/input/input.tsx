import { cn } from "@/utils/cn";
import { forwardRef, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
    return (
        <input
            className={cn("w-full px-4 h-8 py-2 rounded-lg max-w-[260px]", className)}
            type={type}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";
export { Input };
