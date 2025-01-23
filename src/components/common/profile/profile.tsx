import { TImagen } from "@/utils/mock-data";

export const Profile = ({
    imagen,
    nombre,
    apellido,
}: {
    imagen: TImagen | undefined;
    nombre: string;
    apellido: string;
}) => {
    return (
        <div className="flex items-center justify-center w-40 h-40 overflow-hidden bg-white rounded-full">
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
