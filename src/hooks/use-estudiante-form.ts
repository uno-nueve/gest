import { TEstudiante } from "@/types/estudiante";
import { useAppDispatch } from "./rtk";
import { useEffect } from "react";
import { decodeBase64 } from "@/utils/decode-base64";
import { useForm } from "react-hook-form";
import { FormFields, schema } from "@/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { setImage } from "@/state/file-picker/file-picker-slice";

export const useEstudianteForm = (estudiante?: TEstudiante) => {
    const dispatch = useAppDispatch();

    const methods = useForm<FormFields>({
        defaultValues: estudiante
            ? {
                  nombre: estudiante.nombre,
                  apellido: estudiante.apellido,
                  email: estudiante.email,
                  direccion: estudiante.direccion,
                  tutor: estudiante.tutor,
                  telefono: estudiante.telefono,
                  grado: estudiante.grado,
                  docente: estudiante.docente,
                  cursos: estudiante.cursos,
                  observaciones: estudiante.observaciones,
                  imagen: estudiante.imagen,
              }
            : undefined,
        resolver: zodResolver(schema),
    });

    useEffect(() => {
        if (estudiante && estudiante.imagen?.data) {
            const file = decodeBase64(
                estudiante.imagen.data,
                `${estudiante.nombre}${estudiante.apellido}.jpg`
            );

            dispatch(setImage(file));
        } else {
            dispatch(setImage(null));
        }
    }, []);

    return methods;
};
