import { CursoCard } from "@/components/common/card/curso-card";
import { useFetchCursos } from "@/hooks/use-fetch-cursos";
import { TwoSeventyRing } from "react-svg-spinners";

export const CursosPage = () => {
    const { count, isLoading } = useFetchCursos();

    return (
        <div className="flex flex-col gap-4">
            <div className="sticky flex items-center justify-between w-full py-4 border-b top-20 border-neutral-300 bg-[rbga(250,250,250,0.4)] backdrop-blur">
                <h1 className="text-2xl font-bold">Cursos</h1>
            </div>
            {isLoading ? (
                <div className="flex items-center justify-center w-full h-[calc(100vh-266px)]">
                    <TwoSeventyRing width={80} height={80} />
                </div>
            ) : (
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4">
                    {count?.map(({ label, amount }) => (
                        <CursoCard label={label} amount={amount} key={label} />
                    ))}
                </div>
            )}
        </div>
    );
};
