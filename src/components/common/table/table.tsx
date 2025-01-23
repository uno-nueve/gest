import { TCurso } from "@/utils/mock-data";
import { ReactNode } from "react";

export const THead = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-black">
            {children}
        </div>
    );
};

export const TRow = ({ children }: { children: ReactNode }) => {
    return <div className="flex items-center justify-between px-4">{children}</div>;
};

export const TCel = ({ value }: { value: string | number }) => {
    return <div>{value}</div>;
};

export const Table = ({ label, cursos }: { label: string; cursos: TCurso[] }) => {
    return (
        <div>
            <h3 className="pb-2 font-bold">{label}</h3>
            <div className="flex flex-col gap-2 pb-2 overflow-hidden rounded-lg bg-neutral-100">
                <THead>
                    <TCel value="Curso" />
                    <TCel value="Nota" />
                </THead>
                {cursos.map(({ curso, nota }) => (
                    <TRow>
                        <TCel value={curso} />
                        <TCel value={nota} />
                    </TRow>
                ))}
            </div>
        </div>
    );
};
