import { TCount } from "@/hooks/use-fetch-cursos";

export const CursoCard = ({ label, amount }: TCount) => {
    return (
        <div className="p-8 rounded-2xl flex flex-col items-center gap-2 border border-[#ededed] bg-gradient-to-b from-neutral-50 to-white">
            <div className="text-2xl font-bold ">{label}</div>
            <div className=" text-8xl">{amount}</div>
        </div>
    );
};
