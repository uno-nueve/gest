import { Field, Form } from "@base-ui-components/react";
import { Button } from "@/components/ui/button/button";
import { ImageIcon } from "@/components/ui/svg/image-icon";
import { FileField } from "../field/file-field";
import { SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/input/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputTable } from "../table/input-table";
import { Input } from "@/components/ui/input/input";

const schema = z.object({
    nombre: z.string().min(2, "Campo obligatorio"),
    apellido: z.string().min(2, "Campo obligatorio"),
    email: z.string().email("Email invalido"),
    direccion: z.string().min(2, "Campo obligatorio"),
    tutor: z.string().min(2, "Campo obligatorio"),
    telefono: z.string().min(8, "Formato invalido"),
    año: z.string().length(4, "Formato invalido"),
    docente: z.string().min(2, "Campo obligatorio"),
    // cursos: z.object({ curso: z.string(), nota: z.number() }).array(),
    observaciones: z.string().optional(),
    imagen: z.object({ data: z.string().base64() }).optional(),
});

type FormFields = z.infer<typeof schema>;

export const EstudianteForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-12 px-4 py-8 border-b border-neutral-300 max-h-[224px]">
                <FileField label={<ImageIcon className="w-16 h-16" />} />
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div>
                            <label htmlFor="nombre" className="font-bold">
                                Nombre
                            </label>
                            {errors.nombre && (
                                <p className="text-xs text-red-600">{errors.nombre.message}</p>
                            )}
                        </div>
                        <Input {...register("nombre")} placeholder="Bart" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <label htmlFor="apellido" className="font-bold">
                                Apellido
                            </label>
                            {errors.apellido && (
                                <p className="text-xs text-red-600">{errors.apellido.message}</p>
                            )}
                        </div>
                        <Input {...register("apellido")} placeholder="Simpson" />
                    </div>
                </div>
            </div>
            <div className="flex min-h-[calc(100vh-384px)]">
                <aside className="flex flex-col gap-4 px-4 py-8 border-r w-[280px] border-neutral-300">
                    <h2 className="text-xl font-bold text-nowrap">Información personal</h2>
                    <div className="flex flex-col gap-2">
                        <div>
                            <label htmlFor="email" className="font-bold">
                                Email
                            </label>
                            {errors.email && (
                                <p className="text-xs text-red-600">{errors.email.message}</p>
                            )}
                        </div>
                        <Input {...register("email")} placeholder="Bart" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <label htmlFor="direccion" className="font-bold">
                                Dirección
                            </label>
                            {errors.direccion && (
                                <p className="text-xs text-red-600">{errors.direccion.message}</p>
                            )}
                        </div>
                        <Input {...register("direccion")} placeholder="Bart" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <label htmlFor="tutor" className="font-bold">
                                Tutor
                            </label>
                            {errors.tutor && (
                                <p className="text-xs text-red-600">{errors.tutor.message}</p>
                            )}
                        </div>
                        <Input {...register("tutor")} placeholder="Bart" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <label htmlFor="telefono" className="font-bold">
                                Teléfono
                            </label>
                            {errors.telefono && (
                                <p className="text-xs text-red-600">{errors.telefono.message}</p>
                            )}
                        </div>
                        <Input {...register("telefono")} placeholder="Bart" />
                    </div>
                </aside>
                <div className="flex flex-col w-full gap-4 px-4 py-8">
                    <h2 className="text-xl font-bold">Información académica</h2>
                    <div className="flex flex-col gap-2">
                        <div>
                            <label htmlFor="año" className="font-bold">
                                Año
                            </label>
                            {errors.año && (
                                <p className="text-xs text-red-600">{errors.año.message}</p>
                            )}
                        </div>
                        <Input {...register("año")} placeholder="Bart" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <label htmlFor="docente" className="font-bold">
                                Docente
                            </label>
                            {errors.docente && (
                                <p className="text-xs text-red-600">{errors.docente.message}</p>
                            )}
                        </div>
                        <Input {...register("docente")} placeholder="Bart" />
                    </div>
                    <InputTable label="cursos" />
                    <div className="flex flex-col gap-2">
                        <div>
                            <label htmlFor="observaciones" className="font-bold">
                                Ovservaciones
                            </label>
                            {errors.observaciones && (
                                <p className="text-xs text-red-600">
                                    {errors.observaciones.message}
                                </p>
                            )}
                        </div>
                        <Textarea
                            {...register("observaciones")}
                            placeholder="Algo acerca del alumno..."
                            rows={3}
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant={isSubmitting ? "disabled" : "primary"}
                    >
                        {isSubmitting ? "Guardando" : "Guardar"}
                    </Button>
                </div>
            </div>
        </Form>
    );
};
