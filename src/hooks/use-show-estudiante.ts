import { useParams } from "react-router";
import { useAppSelector } from "./rtk";

export const useShowEstudiante = () => {
    const data = useAppSelector((state) => state.estudiantes.data);
    const { id } = useParams();
    const estudiante = data.filter((entry) => entry._id === id)[0];

    return estudiante;
};
