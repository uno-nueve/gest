import { LabelHTMLAttributes } from "react";
import { ImageIcon } from "../svg/image-icon";
import { useAppSelector } from "@/hooks/rtk";

export interface FilePickerProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const FilePicker = ({ id }: FilePickerProps) => {
    const imagen = useAppSelector((state) => state.file.imagen);
    console.log(imagen);

    return (
        <label
            htmlFor={id}
            className="flex items-center justify-center w-40 h-40 overflow-hidden bg-white rounded-full text-neutral-300 hover:cursor-pointer"
        >
            {imagen ? (
                <img
                    src={URL.createObjectURL(imagen)}
                    alt="avatar"
                    className="object-cover w-full h-full"
                />
            ) : (
                <ImageIcon className="w-16 h-16" />
            )}
        </label>
    );
};
