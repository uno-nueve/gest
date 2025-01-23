import { TEstudiante } from "@/utils/mock-data";
import { Link } from "react-router";

export const Card = ({ estudiante }: { estudiante: TEstudiante }) => {
    const { _id, nombre, apellido } = estudiante;
    return (
        <Link
            to={`${_id}`}
            className="p-4 rounded-2xl border border-[#ededed] bg-gradient-to-b from-neutral-50 to-white"
        >
            <img src="" alt={_id} className="w-40 h-40 rounded-lg" />
            <p className="line-clamp-1">
                {nombre} {apellido}
            </p>
        </Link>
    );
};
