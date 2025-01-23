import { TEstudiante } from "@/utils/mock-data";
import { Link } from "react-router";

export const Card = ({ estudiante }: { estudiante: TEstudiante }) => {
    const { _id, nombre, apellido, imagen } = estudiante;
    return (
        <Link
            to={`${_id}`}
            className="p-4 rounded-2xl border border-[#ededed] bg-gradient-to-b from-neutral-50 to-white"
        >
            <img
                src={`data:image/jpeg;base64,${imagen?.data}`}
                alt={`${nombre} ${apellido}`}
                className="object-cover w-40 h-40 rounded-lg"
            />
            <p className="line-clamp-1">
                {nombre} {apellido}
            </p>
        </Link>
    );
};
