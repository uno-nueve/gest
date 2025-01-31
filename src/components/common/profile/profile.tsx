import { Button } from "@/components/ui/button/button";
import { Link } from "react-router";
import { Field } from "../field/field";
import { Table } from "../table/table";
import { TEstudiante } from "@/types/estudiante";
import { Avatar } from "@/components/ui/avatar/avatar";
import { useAppDispatch } from "@/hooks/rtk";
import { showModal } from "@/state/modal/modal-slice";

export const Profile = ({ data }: { data: TEstudiante }) => {
    const dispatch = useAppDispatch();

    return (
        <main>
            <div className="flex gap-12 px-4 py-8 border-b border-neutral-300 max-h-[224px]">
                <Avatar imagen={data.imagen} nombre={data.nombre} apellido={data.apellido} />
                <div className="flex flex-col gap-4">
                    <h1 className="text-[2.5rem] font-bold">
                        {data.nombre} {data.apellido}
                    </h1>
                    <div className="flex gap-2">
                        <Link to="editar" className="w-max">
                            <Button>Editar estudiante</Button>
                        </Link>
                        <Button variant="destructive" onClick={() => dispatch(showModal(true))}>
                            Eliminar
                        </Button>
                    </div>
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
