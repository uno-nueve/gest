import { TEstudiante } from "@/types/estudiante";
import { FormFields } from "@/types/schema";
import { ESTUDIANTES } from "@/utils/urls";
import axios from "axios";
import { SubmitHandler } from "react-hook-form";

export const useSubmitEstudiante = (estudiante?: TEstudiante) => {
    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const formData = new FormData();
        formData.append("nombre", data.nombre);
        formData.append("apellido", data.apellido);
        formData.append("email", data.email);
        formData.append("direccion", data.direccion);
        formData.append("tutor", data.tutor);
        formData.append("telefono", data.telefono);
        formData.append("grado", data.grado);
        formData.append("docente", data.docente);
        formData.append("cursos", JSON.stringify(data.cursos));

        if (data.observaciones) {
            formData.append("observaciones", data.observaciones);
        }

        if (data.imagen instanceof File) {
            formData.append("imagen", data.imagen);
        }

        const url = estudiante ? `${ESTUDIANTES}/${estudiante._id}` : ESTUDIANTES;

        try {
            const res = await axios({
                method: estudiante ? "PUT" : "POST",
                url,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });

            return res.data;
        } catch (error) {
            console.error("Error enviando el formulario", error);
        }
    };
    return { onSubmit };
};
