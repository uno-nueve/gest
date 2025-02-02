import { Button } from "@/components/ui/button/button";
import { useEffect } from "react";
import { TCel, TFoot, THead, TRow } from "./table";
import { Select, SelectItem } from "@/components/ui/input/select";
import { useAppDispatch, useAppSelector } from "@/hooks/rtk";
import { setNota } from "@/state/temp/temp-slice";
import { useFormContext, useWatch } from "react-hook-form";
import { Input } from "@/components/ui/input/input";
import { TCurso } from "@/types/curso";
import { Trash } from "@/components/ui/svg/trash";
import { useInputTable } from "@/hooks/use-input-table";

export const InputTable = ({ label, defaultValue }: { label: string; defaultValue?: TCurso[] }) => {
    const dispatch = useAppDispatch();
    const temp = useAppSelector((state) => state.temp);
    const { register, setValue, control } = useFormContext();
    const cursos: TCurso[] = useWatch({ control, name: "cursos" }) || [];
    const { handleSetCursos, handleUpdateNota, handleDeleteCurso } = useInputTable(cursos, temp);

    useEffect(() => {
        if (defaultValue?.length) {
            setValue("cursos", defaultValue);
        }
    }, [defaultValue, setValue]);

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
                        <div className="flex items-center gap-2">
                            <Button
                                variant="destructive"
                                size="icon"
                                onClick={(e) => handleDeleteCurso(e, curso)}
                            >
                                <Trash />
                            </Button>
                            <TCel value={curso} />
                        </div>
                        <Input
                            type="number"
                            defaultValue={nota}
                            inputMode="numeric"
                            min={1}
                            max={10}
                            className="text-center border rounded-lg w-14"
                            onChange={(e) => handleUpdateNota(curso, Number(e.currentTarget.value))}
                        />
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
                            value={temp.nota}
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
