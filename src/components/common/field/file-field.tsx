import { FilePicker } from "@/components/ui/input/file-picker";
import { Input } from "@/components/ui/input/input";
import { useAppDispatch } from "@/hooks/rtk";
import { setImage } from "@/state/file-picker/file-picker-slice";
import { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";

interface FileFieldProps {
    label: string;
    error: any;
}

export const FileField = ({ label, error }: FileFieldProps) => {
    const { register, setValue } = useFormContext();
    const dispatch = useAppDispatch();

    function handleImgChange(e: ChangeEvent<HTMLInputElement>) {
        const file = e.currentTarget.files?.[0];

        if (file) {
            setValue("imagen", file, { shouldValidate: true });
            dispatch(setImage(file));
        }
    }

    return (
        <div className="flex flex-col items-center justify-between">
            <FilePicker id={label} />
            {error && <p className="text-xs text-red-600">{error.message}</p>}
            <Input
                type="file"
                id="imagen"
                accept="image/png, image/jpeg, image/jpg"
                className="hidden"
                {...register(`${label}`)}
                onChange={handleImgChange}
            />
        </div>
    );
};
