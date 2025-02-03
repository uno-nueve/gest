import { useAppSelector } from "@/hooks/rtk";

export const InfoPage = () => {
    const session = useAppSelector((state) => state.session.session);

    return (
        <div>
            <div className="py-4 border-b border-neutral-300">
                <h1 className="text-2xl font-bold">
                    ¡Hola, <span className="text-orange-500">{session?.name}</span>!
                </h1>
                <p className="text-sm font-medium text-neutral-400">
                    Te damos la bienvenida a GEst.
                </p>
            </div>
            <div className="flex flex-col items-center max-w-screen-lg py-4 mx-auto">
                <p className="mb-8 text-3xl font-semibold">Con GEst podrás...</p>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2 p-2 rounded-2xl">
                        <img
                            loading="lazy"
                            className="w-full border rounded-lg"
                            src="/src/assets/info/DASHBOARD.png"
                            alt="Grilla de estudiantes"
                        />
                        <p className="p-2 text-white rounded-lg bg-neutral-800">
                            📚 Listar tu planilla de alumnos de una forma única y visual.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 p-2 rounded-2xl">
                        <img
                            loading="lazy"
                            className="w-full border rounded-lg"
                            src="/src/assets/info/PROFILE.png"
                            alt="Perfil de estudiante"
                        />
                        <p className="p-2 text-white rounded-lg bg-neutral-800">
                            🪪 Ver detalladamente los datos de tus estudiantes.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 p-2 rounded-2xl">
                        <img
                            loading="lazy"
                            className="w-full border rounded-lg"
                            src="/src/assets/info/CREAR_EDITAR.png"
                            alt="Formularios de estudiantes"
                        />
                        <p className="p-2 text-white rounded-lg bg-neutral-800">
                            ✍️ Crear y editar registros de estudiantes con formularios intuitivos.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 p-2 rounded-2xl">
                        <img
                            loading="lazy"
                            className="w-full border rounded-lg"
                            src="/src/assets/info/DELETE.png"
                            alt="Modal para eliminar estudiante"
                        />
                        <p className="p-2 text-white rounded-lg bg-neutral-800">
                            🗑️ Remover registros de estudiantes de tu planilla.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 p-2 rounded-2xl">
                        <img
                            loading="lazy"
                            className="w-full border rounded-lg"
                            src="/src/assets/info/CURSOS.png"
                            alt="Gráficos de cursos"
                        />
                        <p className="p-2 text-white rounded-lg bg-neutral-800">
                            📈 Acceder a métricas sobre los cursos a los que se inscriben tus
                            alumnos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
