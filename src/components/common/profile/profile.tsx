import { Button } from "@/components/ui/button/button";
import { Link } from "react-router";
import { Field } from "../field/field";
import { Table } from "../table/table";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { TImagen } from "@/types/imagen";
import { TEstudiante } from "@/types/estudiante";

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

export const Profile = ({ data }: { data: TEstudiante }) => {
    return (
        <main>
            <div className="flex gap-12 px-4 py-8 border-b border-neutral-300 max-h-[224px]">
                <Avatar imagen={data.imagen} nombre={data.nombre} apellido={data.apellido} />
                <div className="flex flex-col gap-4">
                    <h1 className="text-[2.5rem] font-bold">
                        {data.nombre} {data.apellido}
                    </h1>
                    <Link to="editar">
                        <Button>Editar estudiante</Button>
                    </Link>
                </div>
            </div>
            <div className="flex min-h-[calc(100vh-384px)]">
                <aside className="flex flex-col gap-4 px-4 py-8 border-r w-[280px] border-neutral-300">
                    <h2 className="text-xl font-bold text-nowrap">Información personal</h2>
                    <Field label="Email" value={data.email} />
                    <Field label="Dirección" value={data.direccion} />
                    <Field label="Tutor" value={data.tutor} />
                    <Field label="Teléfono" value={data.telefono} />
                </aside>
                <div className="flex flex-col w-full gap-4 px-4 py-8">
                    <h2 className="text-xl font-bold">Información académica</h2>
                    <Field label="Grado" value={data.grado} />
                    <Field label="Docente" value={data.docente} />
                    <Table label="Cursos" cursos={data.cursos} />
                    <Field label="Observaciones" value={data.observaciones} variant="display" />
                </div>
            </div>
        </main>
    );
};
