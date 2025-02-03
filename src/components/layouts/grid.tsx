import axios from "axios";
import { ESTUDIANTES } from "@/utils/urls";
import { useEffect } from "react";
import { Card } from "../common/card/estudiante-card";
import { useAppDispatch, useAppSelector } from "@/hooks/rtk";
import { indexEstudiantes } from "@/state/estudiantes/estudiantes-slice";

export const Grid = () => {
    const data = useAppSelector((state) => state.estudiantes.data);
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function getData() {
            await axios
                .get(ESTUDIANTES)
                .then((res) => res.data)
                .then((data) => dispatch(indexEstudiantes(data)));
        }
        getData();
    }, []);

    return (
        <div className="grid grid-cols-5 gap-4 pb-4">
            {data?.map((estudiante) => (
                <Card estudiante={estudiante} key={estudiante._id} />
            ))}
        </div>
    );
};
