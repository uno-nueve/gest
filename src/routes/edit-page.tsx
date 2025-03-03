import { EstudianteForm } from "@/components/common/form/estudiante-form";
import { useAppDispatch } from "@/hooks/rtk";
import { useShowEstudiante } from "@/hooks/use-show-estudiante";
import { getEstudiante } from "@/state/estudiantes/estudiantes-slice";
import { useParams } from "react-router";

export const EditPage = () => {
    const { id } = useParams();
    const estudiante = useShowEstudiante();
    const dispatch = useAppDispatch();

    if (!estudiante) {
        dispatch(getEstudiante(id!));
        return <></>;
    }

    return <EstudianteForm estudiante={estudiante} />;
};
