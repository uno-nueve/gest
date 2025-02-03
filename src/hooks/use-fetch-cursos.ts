import { useEffect, useState } from "react";
import { useAxios } from "./use-axios";
import { ESTUDIANTES } from "@/utils/urls";

export type TCount = { label: string; amount: number };

export const useFetchCursos = () => {
    const [count, setCount] = useState<TCount[]>();
    const { GET, isLoading } = useAxios();
    const cursos = [
        "Matemática",
        "Historia",
        "Biología",
        "Arte",
        "Lengua",
        "Educación Física",
        "Física",
        "Química",
        "Inglés",
    ];

    useEffect(() => {
        async function fetchCount() {
            try {
                const studentCount = await Promise.all(
                    cursos.map(async (curso) => {
                        const estudiantes = await GET(`${ESTUDIANTES}?curso=${curso}`);
                        return { label: curso, amount: estudiantes.length };
                    })
                );
                setCount(studentCount);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCount();
    }, []);

    return { count, isLoading };
};
