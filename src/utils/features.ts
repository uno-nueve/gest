export type TFeature = {
    src: string;
    alt: string;
    description: string;
};

export const features: TFeature[] = [
    {
        src: "/info/DASHBOARD.png",
        alt: "Grilla de estudiantes",
        description: "📚 Listar tu planilla de alumnos de una forma única y visual.",
    },
    {
        src: "/info/PROFILE.png",
        alt: "Perfil de estudiante",
        description: "🪪 Ver detalladamente los datos de tus estudiantes.",
    },
    {
        src: "/info/CREAR_EDITAR.png",
        alt: "Formularios de estudiantes",
        description: "✍️ Crear y editar registros de estudiantes con formularios intuitivos.",
    },
    {
        src: "/info/DELETE.png",
        alt: "Modal para eliminar estudiante",
        description: "🗑️ Remover registros de estudiantes de tu planilla.",
    },
    {
        src: "/info/CURSOS.png",
        alt: "Gráficos de cursos",
        description: "📈 Acceder a métricas sobre los cursos a los que se inscriben tus alumnos.",
    },
];
