import { Field } from "@/components/common/field/field";
import { Profile } from "@/components/common/profile/profile";
import { Table } from "@/components/common/table/table";
import { Button } from "@/components/ui/button/button";
import { mockdata, TEstudiante } from "@/utils/mock-data";
import { Link } from "react-router";

const data: TEstudiante = mockdata[0];

export const ProfilePage = () => {
    return (
        <div>
            <div className="flex gap-12 px-4 py-8 border-b border-neutral-300 max-h-[224px]">
                <Profile imagen={data.imagen} nombre={data.nombre} apellido={data.apellido} />
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
                <aside className="flex flex-col gap-4 px-4 py-8 border-r border-neutral-300">
                    <h2 className="text-xl font-bold text-nowrap">Información personal</h2>
                    <Field label="Email" value={data.email} />
                    <Field label="Dirección" value={data.direccion} />
                    <Field label="Tutor" value={data.tutor} />
                    <Field label="Teléfono" value={data.telefono} />
                </aside>
                <main className="flex flex-col gap-4 px-4 py-8">
                    <h2 className="text-xl font-bold">Información académica</h2>
                    <Field label="Año" value={`${data.año} "${data.division}"`} />
                    <Field label="Docente" value={data.docente} />
                    <Table label="Cursos" cursos={data.cursos} />
                    <Field label="Observaciones" value={data.observaciones} variant="display" />
                </main>
            </div>
        </div>
    );
};
