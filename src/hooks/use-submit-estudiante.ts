import { TEstudiante } from "@/types/estudiante";
import { FormFields } from "@/types/schema";
import { ESTUDIANTES } from "@/utils/urls";
import { SubmitHandler } from "react-hook-form";
import { useAxios } from "./use-axios";

export const useSubmitEstudiante = (estudiante?: TEstudiante) => {
    const { POST, PUT, PATCH, error, isLoading, data } = useAxios();

    const onSubmit: SubmitHandler<FormFields> = async (data): Promise<void> => {
        const formData = new FormData();
        const imagenForm = new FormData();
        const { imagen, ...uData } = data;

        formData.append("nombre", uData.nombre);
        formData.append("apellido", uData.apellido);
        formData.append("email", uData.email);
        formData.append("direccion", uData.direccion);
        formData.append("tutor", uData.tutor);
        formData.append("telefono", uData.telefono);
        formData.append("grado", uData.grado);
        formData.append("docente", uData.docente);
        formData.append("cursos", JSON.stringify(uData.cursos));

        if (data.observaciones) {
            formData.append("observaciones", data.observaciones);
        }

        if (estudiante) {
            const uPromises = [PUT(`${ESTUDIANTES}/${estudiante._id}`, uData)];
            if (imagen instanceof File) {
                formData.append("imagen", imagen);
                imagenForm.append("imagen", imagen);
                uPromises.push(
                    PATCH(`${ESTUDIANTES}/${estudiante._id}/avatar`, imagenForm, {
                        headers: { "Content-Type": "multipart/form-data" },
                    })
                );
            }
            await Promise.all(uPromises);
        } else {
            await POST(ESTUDIANTES, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
        }
    };
    return { onSubmit, error, isLoading, data };
};
