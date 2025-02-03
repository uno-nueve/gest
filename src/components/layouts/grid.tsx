import { ESTUDIANTES } from "@/utils/urls";
import { useEffect } from "react";
import { Card } from "../common/card/estudiante-card";
import { useAppDispatch, useAppSelector } from "@/hooks/rtk";
import { indexEstudiantes } from "@/state/estudiantes/estudiantes-slice";
import { useAxios } from "@/hooks/use-axios";
import { TEstudiante } from "@/types/estudiante";
import { TwoSeventyRing } from "react-svg-spinners";

export const Grid = () => {
    const data = useAppSelector((state) => state.estudiantes.data);
    const dispatch = useAppDispatch();
    const { GET, isLoading } = useAxios();

    useEffect(() => {
        async function getData() {
            const res = await GET<TEstudiante[]>(ESTUDIANTES);
            dispatch(indexEstudiantes(res));
        }
        getData();
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="flex items-center justify-center w-full h-[calc(100vh-266px)]">
                    <TwoSeventyRing width={80} height={80} />
                </div>
            ) : (
                <div className="grid grid-cols-5 gap-4 pb-4">
                    {data?.map((estudiante) => (
                        <Card estudiante={estudiante} key={estudiante._id} />
                    ))}
                </div>
            )}
        </>
    );
};
