import { Button } from "@/components/ui/button/button";
import { FormProvider } from "react-hook-form";
import { InputTable } from "../table/input-table";
import { InputField } from "../field/input-field";
import { TextareaField } from "../field/textarea-field";
import { FileField } from "../field/file-field";
import { TEstudiante } from "@/types/estudiante";
import { useEstudianteForm } from "@/hooks/use-estudiante-form";
import { useSubmitEstudiante } from "@/hooks/use-submit-estudiante";

type EstudianteFormProps = {
    estudiante?: TEstudiante;
};

export const EstudianteForm = ({ estudiante }: EstudianteFormProps) => {
    const methods = useEstudianteForm(estudiante);
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;
    const { onSubmit } = useSubmitEstudiante(estudiante);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-12 px-4 py-8 border-b border-neutral-300 max-h-[224px]">
                    <FileField label="imagen" error={errors.imagen} />
                    <div className="flex flex-col gap-4">
                        <InputField label="nombre" error={errors.nombre} placeholder="Bart" />
                        <InputField
                            label="apellido"
                            error={errors.apellido}
                            placeholder="Simpson"
                        />
                    </div>
                </div>
                <div className="flex min-h-[calc(100vh-384px)]">
                    <aside className="flex flex-col gap-4 px-4 py-8 border-r w-[280px] border-neutral-300">
                        <h2 className="text-xl font-bold text-nowrap">Información personal</h2>
                        <InputField
                            label="email"
                            error={errors.email}
                            placeholder="eatmyshorts@mail.com"
                        />
                        <InputField
                            label="direccion"
                            error={errors.direccion}
                            placeholder="Av. Siempreviva 742"
                        />
                        <InputField
                            label="tutor"
                            error={errors.tutor}
                            placeholder="Homero Simpson"
                        />
                        <InputField
                            label="telefono"
                            error={errors.telefono}
                            placeholder="636-555-1234"
                        />
                    </aside>
                    <div className="flex flex-col w-full gap-4 px-4 py-8">
                        <h2 className="text-xl font-bold">Información académica</h2>
                        <InputField label="grado" error={errors.grado} placeholder="4 B" />
                        <InputField
                            label="docente"
                            error={errors.docente}
                            placeholder="Edna Krabbaple"
                        />
                        <InputTable
                            label="cursos"
                            defaultValue={estudiante ? estudiante.cursos : []}
                        />
                        <TextareaField
                            label="observaciones"
                            error={errors.observaciones}
                            placeholder="Algo acerca del alumno..."
                        />

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            variant={isSubmitting ? "disabled" : "primary"}
                        >
                            {isSubmitting ? "Guardando" : "Guardar"}
                        </Button>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};
