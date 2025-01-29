import { TCurso } from "./curso";
import { TImagen } from "./imagen";

export type TEstudiante = {
    _id: string;
    nombre: string;
    apellido: string;
    email: string;
    direccion: string;
    tutor: string;
    telefono: string;
    grado: string;
    docente: string;
    observaciones: string;
    cursos: TCurso[];
    imagen?: TImagen;
};
