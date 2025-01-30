import { TImagen } from "@/types/imagen";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

type TAvatar = {
    imagen: TImagen | undefined;
    nombre: string;
    apellido: string;
    variant?: "square" | "round";
};

const avatarVariants = cva("flex items-center justify-center overflow-hidden bg-white ", {
    variants: {
        variant: {
            round: "w-40 h-40 rounded-full",
            square: "w-full h-full rounded-lg aspect-square",
        },
    },
    defaultVariants: {
        variant: "round",
    },
});

export const Avatar = ({ imagen, nombre, apellido, variant }: TAvatar) => {
    return (
        <div className={cn(avatarVariants({ variant }))}>
            {imagen?.data ? (
                <img
                    src={`data:image/jpeg;base64,${imagen?.data}`}
                    alt={`${nombre} ${apellido}`}
                    className="object-cover w-full h-full"
                />
            ) : (
                <p className="font-bold text-[4rem]">
                    {nombre[0]}
                    {apellido[0]}
                </p>
            )}
        </div>
    );
};
