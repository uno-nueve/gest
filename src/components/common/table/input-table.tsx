import { Button } from "@/components/ui/button/button";
import { FormEvent, useEffect } from "react";
import { TCel, TFoot, THead, TRow } from "./table";
import { Select, SelectItem } from "@/components/ui/input/select";
import { useAppDispatch, useAppSelector } from "@/hooks/rtk";
import { setNota } from "@/state/temp/temp-slice";
import { useFormContext, useWatch } from "react-hook-form";
import { Input } from "@/components/ui/input/input";
import { TCurso } from "@/types/curso";

export const InputTable = ({ label, defaultValue }: { label: string; defaultValue?: TCurso[] }) => {
    const dispatch = useAppDispatch();
    const temp = useAppSelector((state) => state.temp);
    const { register, setValue, control } = useFormContext();
    const cursos: TCurso[] = useWatch({ control, name: "cursos" }) || [];

    useEffect(() => {
        if (defaultValue?.length) {
            setValue("cursos", defaultValue);
        }
    }, [defaultValue, setValue]);

    function handleSetCursos(e: FormEvent) {
        e.preventDefault();
        if (!cursos.some((curso) => curso.curso === temp.curso) && temp.curso.length) {
            const updatedCursos = [...cursos, temp];
            setValue("cursos", updatedCursos);
        }
    }

    return (
        <div>
            <Input {...register("cursos")} className="hidden" />
            <h3 className="pb-2 font-bold capitalize">{label}</h3>
            <div className="flex flex-col gap-2 pb-2 rounded-lg bg-neutral-100">
                <THead>
                    <TCel value="Curso" />
                    <TCel value="Nota" />
                </THead>
                {cursos.map(({ curso, nota }) => (
                    <TRow key={curso}>
                        <TCel value={curso} />
                        <TCel value={nota} />
                    </TRow>
                ))}
                <TRow>
                    <label htmlFor="curso" className="hidden" />
                    <Select placeholder="Matemática" name="curso">
                        <SelectItem value="" hidden />
                        <SelectItem value="Matemática" />
                        <SelectItem value="Historia" />
                        <SelectItem value="Biología" />
                        <SelectItem value="Arte" />
                        <SelectItem value="Educación Física" />
                        <SelectItem value="Lengua" />
                        <SelectItem value="Física" />
                        <SelectItem value="Química" />
                        <SelectItem value="Ingles" />
                    </Select>
                    <div className="flex items-center h-8 gap-2 w-max">
                        <label htmlFor="nota" className="hidden" />
                        <Input
                            type="number"
                            name="nota"
                            inputMode="numeric"
                            min={1}
                            max={10}
                            className="h-full text-center border rounded-lg w-14 "
                            placeholder="10"
                            onChange={(e) => dispatch(setNota(Number(e.currentTarget.value)))}
                        />
                    </div>
                </TRow>
                <TFoot>
                    <Button size="sm" variant="secondary" onClick={handleSetCursos}>
                        Añadir curso
                    </Button>
                </TFoot>
            </div>
        </div>
    );
};
