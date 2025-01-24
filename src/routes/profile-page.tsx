import { Field } from "@/components/common/field/field";
import { Profile } from "@/components/common/profile/profile";
import { Table } from "@/components/common/table/table";
import { ProfileLayout } from "@/components/layouts/profile-layout";
import { Button } from "@/components/ui/button/button";
import { mockdata, TEstudiante } from "@/utils/mock-data";
import { Link } from "react-router";

const data: TEstudiante = mockdata[0];

const BriefContent = () => {
    return (
        <>
            <Field label="Año" value={`${data.año} "${data.division}"`} />
            <Field label="Docente" value={data.docente} />
            <Table label="Cursos" cursos={data.cursos} />
            <Field label="Observaciones" value={data.observaciones} variant="display" />
        </>
    );
};

const SideContent = () => {
    return (
        <>
            <Field label="Email" value={data.email} />
            <Field label="Dirección" value={data.direccion} />
            <Field label="Tutor" value={data.tutor} />
            <Field label="Teléfono" value={data.telefono} />
        </>
    );
};

const BannerContent = () => {
    return (
        <>
            <Profile imagen={data.imagen} nombre={data.nombre} apellido={data.apellido} />
            <div className="flex flex-col gap-4">
                <h1 className="text-[2.5rem] font-bold">
                    {data.nombre} {data.apellido}
                </h1>
                <Link to="editar">
                    <Button>Editar estudiante</Button>
                </Link>
            </div>
        </>
    );
};

export const ProfilePage = () => {
    return (
        <ProfileLayout
            sideTitle="Información personal"
            sideContent={<SideContent />}
            briefTitle="Información académica"
            briefContent={<BriefContent />}
            bannerContent={<BannerContent />}
        />
    );
};
