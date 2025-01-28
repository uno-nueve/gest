import { Form } from "@base-ui-components/react";
import { Button } from "@/components/ui/button/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/input/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputTable } from "../table/input-table";
import { Input } from "@/components/ui/input/input";
import { FilePicker } from "@/components/ui/input/file-picker";
import { setImage } from "@/state/file-picker/file-picker-slice";
import { useAppDispatch } from "@/hooks/rtk";
import axios from "axios";
import { TEstudiante } from "@/utils/mock-data";
import { decodeBase64 } from "@/utils/decode-base64";

const schema = z.object({
    nombre: z.string().min(2, "Campo obligatorio"),
    apellido: z.string().min(2, "Campo obligatorio"),
    email: z.string().email("Email invalido"),
    direccion: z.string().min(2, "Campo obligatorio"),
    tutor: z.string().min(2, "Campo obligatorio"),
    telefono: z.string().min(8, "Formato invalido"),
    año: z.string().length(4, "Formato invalido"),
    docente: z.string().min(2, "Campo obligatorio"),
    cursos: z.object({ curso: z.string(), nota: z.number() }).array(),
    observaciones: z.string().optional(),
    imagen: z.union([z.instanceof(File), z.object({ data: z.string().base64() })]).optional(),
});

export type FormFields = z.infer<typeof schema>;

type EstudianteFormProps = {
    estudiante?: TEstudiante;
};

export const EstudianteForm = ({ estudiante }: EstudianteFormProps) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        defaultValues: estudiante
            ? {
                  nombre: estudiante.nombre,
                  apellido: estudiante.apellido,
                  email: estudiante.email,
                  direccion: estudiante.direccion,
                  tutor: estudiante.tutor,
                  telefono: estudiante.telefono,
                  año: estudiante.año,
                  docente: estudiante.docente,
                  cursos: estudiante.cursos,
                  observaciones: estudiante.observaciones,
                  imagen: estudiante.imagen,
              }
            : undefined,
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        if (estudiante) {
            return await axios
                .put(`http://localhost:3000/estudiantes${estudiante._id}`, data)
                .then((res) => console.log(res));
        } else {
            await axios
                .post("http://localhost:3000/estudiantes", data)
                .then((res) => console.log(res));
        }
    };

    const dispatch = useAppDispatch();
    if (estudiante?.imagen?.data) {
        const file = decodeBase64(
            estudiante.imagen.data,
            `${estudiante.nombre}${estudiante.apellido}.jpg`
        );

        dispatch(setImage(file));
    } else {
        dispatch(setImage(undefined));
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-12 px-4 py-8 border-b border-neutral-300 max-h-[224px]">
                <div className="flex items-center justify-between">
                    <FilePicker id="imagen" />
                    {errors.imagen && (
                        <p className="text-xs text-red-600">{errors.imagen.message}</p>
                    )}
                    <Input
                        {...register("imagen")}
                        type="file"
                        id="imagen"
                        accept="image/png, image/jpeg"
                        className="hidden"
                        onChange={(e) => dispatch(setImage(e.currentTarget.files![0]))}
                    />
                </div>
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
                    <InputTable setValue={setValue} label="cursos" />
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
