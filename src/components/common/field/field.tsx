import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

const fieldVariants = cva("inline-flex", {
    variants: {
        variant: {
            plain: "",
            display: "p-4 bg-white rounded-lg",
        },
    },
    defaultVariants: {
        variant: "plain",
    },
});

type FieldProps = {
    label?: string;
    value?: string;
    variant?: "plain" | "display";
    className?: string;
};

export const Field = ({ label, value, className, variant }: FieldProps) => {
    return (
        <div>
            <h3 className="pb-2 font-bold">{label}</h3>
            <div className={cn(fieldVariants({ variant, className }))}>{value}</div>
        </div>
    );
};
