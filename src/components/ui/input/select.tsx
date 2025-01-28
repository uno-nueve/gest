import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, forwardRef, HTMLAttributes } from "react";
import { ChevronUpDown } from "../svg/chevrons-up-down";
import { useAppDispatch, useAppSelector } from "@/hooks/rtk";
import { toggle } from "@/state/select/select-slice";
import { setCurso } from "@/state/temp/temp-slice";

interface SelectRootProps extends HTMLAttributes<HTMLDivElement> {
    placeholder: string;
    name: string;
}
interface SelectTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
    placeholder: string;
}
interface SelectPopupProps extends HTMLAttributes<HTMLUListElement> {}
interface SelectItemProps extends HTMLAttributes<HTMLLIElement> {
    value: string;
}

const Select = forwardRef<HTMLDivElement, SelectRootProps>(
    ({ className, children, name, placeholder, ...props }, ref) => {
        const dispatch = useAppDispatch();
        const value = useAppSelector((state) => state.temp.curso);

        return (
            <div ref={ref} className={cn("relative w-full max-w-[260px]", className)} {...props}>
                <SelectTrigger
                    placeholder={placeholder}
                    value={value}
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(toggle());
                    }}
                    name={name}
                />
                <SelectPopup>{children}</SelectPopup>
            </div>
        );
    }
);

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
    ({ className, value, placeholder, ...props }, ref) => {
        return (
            <button
                ref={ref}
                {...props}
                className={cn(
                    "flex items-center justify-between py-2 px-4 w-full h-8 bg-white text-neutral-400 rounded-lg relative",
                    className
                )}
            >
                {value ? <span className="text-black">{value}</span> : placeholder}
                <ChevronUpDown />
            </button>
        );
    }
);

const SelectPopup = ({ children, className, ...props }: SelectPopupProps) => {
    const isOpen = useAppSelector((state) => state.select.isOpen);

    return (
        <div>
            <ul
                className={
                    isOpen
                        ? cn(
                              "transition-all duration-150 h-44 overflow-y-scroll w-full opacity-100 bg-white absolute mt-2 p-2 rounded-lg shadow-lg border top-full",
                              className
                          )
                        : "h-0 hidden opacity-0"
                }
                {...props}
            >
                {children}
            </ul>
        </div>
    );
};

const SelectItem = forwardRef<HTMLLIElement, SelectItemProps>(
    ({ className, value, ...props }, ref) => {
        const dispatch = useAppDispatch();
        function handleSelection(curso: string) {
            dispatch(setCurso(curso));
            setTimeout(() => dispatch(toggle()), 100);
        }

        return (
            <li
                ref={ref}
                value={value}
                className={cn("p-2 rounded hover:bg-neutral-100", className)}
                {...props}
                onClick={() => handleSelection(value)}
            >
                {value}
            </li>
        );
    }
);

export { Select, SelectItem, SelectTrigger, SelectPopup };
