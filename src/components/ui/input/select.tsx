import { cn } from "@/utils/cn";
import { forwardRef, HTMLAttributes } from "react";
import { ChevronUpDown } from "../svg/chevrons-up-down";
import { useAppDispatch, useAppSelector } from "@/hooks/rtk";
import { toggle } from "@/state/select/select-slice";
import { setCurso } from "@/state/temp/temp-slice";
import { Input, InputProps } from "./input";
import { useFormContext } from "react-hook-form";

interface SelectRootProps extends HTMLAttributes<HTMLDivElement> {
    placeholder: string;
    name: string;
}
interface SelectTriggerProps extends InputProps {}
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
                <div
                    className="relative cursor-pointer max-h-8"
                    onClick={() => {
                        dispatch(toggle());
                    }}
                >
                    <div className="absolute z-10 right-4 top-1 text-neutral-400">
                        <ChevronUpDown />
                    </div>
                    <SelectTrigger placeholder={placeholder} value={value} readOnly name={name} />
                </div>
                <SelectPopup>{children}</SelectPopup>
            </div>
        );
    }
);

const SelectTrigger = ({ className, value }: SelectTriggerProps) => {
    const { register } = useFormContext();

    return (
        <Input
            {...register("nota")}
            className={cn(
                "flex items-center justify-between py-2 px-4 w-full h-8 cursor-pointer bg-white text-black rounded-lg relative",
                className
            )}
            value={value}
        />
    );
};

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
