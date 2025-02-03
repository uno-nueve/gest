import { CursoCard } from "@/components/common/card/curso-card";
import { useFetchCursos } from "@/hooks/use-fetch-cursos";

export const CursosPage = () => {
    const { count } = useFetchCursos();

    return (
        <div className="flex flex-col gap-4">
            <div className="sticky flex items-center justify-between w-full py-4 border-b top-20 border-neutral-300 bg-[rbga(250,250,250,0.4)] backdrop-blur">
                <h1 className="text-2xl font-bold">Cursos</h1>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4">
                {count?.map(({ label, amount }) => (
                    <CursoCard label={label} amount={amount} key={label} />
                ))}
            </div>
        </div>
    );
};
