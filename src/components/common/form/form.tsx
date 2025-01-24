import { Form } from "@base-ui-components/react";
import { FileField, InputField, TextareaField } from "../field/input-field";
import { Button } from "@/components/ui/button/button";
import { ImageIcon } from "@/components/ui/svg/image-icon";

export const EstudianteForm = () => {
    return (
        <Form>
            <div className="flex gap-12 px-4 py-8 border-b border-neutral-300 max-h-[224px]">
                <FileField label={<ImageIcon className="w-16 h-16" />} />
                <div className="flex flex-col gap-4">
                    <InputField label="Nombre" type="text" placeholder="Bart" />
                    <InputField label="Apellido" type="text" placeholder="Simpson" />
                </div>
            </div>
            <div className="flex min-h-[calc(100vh-384px)]">
                <aside className="flex flex-col gap-4 px-4 py-8 border-r w-[280px] border-neutral-300">
                    <h2 className="text-xl font-bold text-nowrap">Información personal</h2>
                    <InputField label="Email" type="email" placeholder="eatmyshorts@email.com" />
                    <InputField label="Direccion" type="text" placeholder="Av. Siempreviva 742" />
                    <InputField label="Tutor" type="text" placeholder="Homero Simpson" />
                    <InputField label="Telefono" type="text" placeholder="636-555-7334" />
                </aside>
                <div className="flex flex-col w-full gap-4 px-4 py-8">
                    <h2 className="text-xl font-bold">Información académica</h2>
                    <InputField label="Año" type="text" placeholder='4° "B"' />
                    <InputField label="Docente" type="text" placeholder="Edna Krabbaple" />
                    {/* <Table label="Cursos" cursos={data.cursos} /> */}
                    <TextareaField label="Observaciones" placeholder="Algo acerca del alumno..." />
                    <Button>Guardar</Button>
                </div>
            </div>
        </Form>
    );
};
