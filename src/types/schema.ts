import { z } from "zod";

const schema = z.object({
    nombre: z.string().min(2, "Campo obligatorio"),
    apellido: z.string().min(2, "Campo obligatorio"),
    email: z.string().email("Email invalido"),
    direccion: z.string().min(2, "Campo obligatorio"),
    tutor: z.string().min(2, "Campo obligatorio"),
    telefono: z.string().min(8, "Formato invalido"),
    grado: z.string().length(3, "Formato invalido"),
    docente: z.string().min(2, "Campo obligatorio"),
    cursos: z.array(z.object({ curso: z.string(), nota: z.number() })),
    observaciones: z.string().optional(),
    imagen: z
        .union([
            z
                .instanceof(File)
                .refine((file) => ["image/png", "image/jpeg", "image/jpg"].includes(file.type), {
                    message: "Invalid image file type",
                }),
            z.object({ data: z.string().base64() }),
        ])
        .optional(),
});
export type FormFields = z.infer<typeof schema>;

export { schema };
