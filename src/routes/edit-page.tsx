import { EstudianteForm } from "@/components/common/form/estudiante-form";
import { useShowEstudiante } from "@/hooks/use-show-estudiante";

export const EditPage = () => {
    const estudiante = useShowEstudiante();

    return <EstudianteForm estudiante={estudiante} />;
};
