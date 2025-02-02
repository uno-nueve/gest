import { TCurso } from "@/types/curso";
import { useAppDispatch } from "./rtk";
import { useFormContext } from "react-hook-form";
import { FormEvent } from "react";
import { resetState } from "@/state/temp/temp-slice";

export const useInputTable = (cursos: TCurso[], temp: any) => {
    const dispatch = useAppDispatch();
    const { setValue } = useFormContext();

    function handleSetCursos(e: FormEvent) {
        e.preventDefault();
        if (!cursos.some((curso) => curso.curso === temp.curso) && temp.curso.length) {
            const updatedCursos = [...cursos, temp];
            setValue("cursos", updatedCursos);
        }
        dispatch(resetState());
    }

    function handleUpdateNota(target: string, value: number) {
        const updatedCursos = cursos.map((curso) =>
            curso.curso === target ? { ...curso, nota: value } : curso
        );
        setValue("cursos", updatedCursos);
    }

    function handleDeleteCurso(e: FormEvent, target: string) {
        e.preventDefault();
        const updatedCursos = cursos.filter((c) => c.curso !== target);
        setValue("cursos", updatedCursos);
    }

    return { handleSetCursos, handleUpdateNota, handleDeleteCurso };
};
