import { TCount, useFetchCursos } from "@/hooks/use-fetch-cursos";

const CursoCard = ({ label, amount }: TCount) => {
    return (
        <div className="p-8 rounded-2xl flex flex-col items-center gap-2 border border-[#ededed] bg-gradient-to-b from-neutral-50 to-white">
            <div className="text-2xl font-bold ">{label}</div>
            <div className=" text-8xl">{amount}</div>
        </div>
    );
};

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
