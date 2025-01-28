import { EstudianteForm } from "@/components/common/form/estudiante-form";
import { mockdata } from "@/utils/mock-data";

export const EditPage = () => <EstudianteForm estudiante={mockdata[0]} />;
