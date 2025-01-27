import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors rounded-lg max-w-max",
    {
        variants: {
            variant: {
                primary: "bg-neutral-800 text-white hover:bg-neutral-700",
                secondary: "bg-neutral-50 text-black hover:bg-neutral-100",
                disabled: "bg-neutral-400 text-neutral-100",
            },
            size: {
                sm: "py-2 px-4 text-sm",
                md: "py-2 px-4",
                lg: "py-2 px-4 text-xl",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "disabled";
    size?: "sm" | "md" | "lg";
    className?: string;
    children?: ReactNode;
};

export const Button = ({ variant, size, className, children, ...props }: ButtonProps) => {
    return (
        <button {...props} className={cn(buttonVariants({ variant, size, className }))}>
            {children}
        </button>
    );
};
