import { Link } from "react-router";
import { Avatar } from "../profile/profile";
import { TEstudiante } from "@/types/estudiante";

export const Card = ({ estudiante }: { estudiante: TEstudiante }) => {
    const { _id, nombre, apellido, imagen } = estudiante;
    return (
        <Link
            to={`${_id}`}
            className="p-4 flex flex-col gap-2 rounded-2xl border border-[#ededed] bg-gradient-to-b from-neutral-50 to-white"
        >
            <Avatar nombre={nombre} apellido={apellido} imagen={imagen} variant="square" />
            <p className="line-clamp-1">
                {nombre} {apellido}
            </p>
        </Link>
    );
};
