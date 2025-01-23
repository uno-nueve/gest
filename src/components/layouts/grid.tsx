import { mockdata } from "@/utils/mock-data";
import { Card } from "../common/card/card";

export const Grid = () => {
    const data = mockdata;

    return (
        <div className="grid grid-cols-5 gap-4 pb-4">
            {data?.map((estudiante) => (
                <Card estudiante={estudiante} key={estudiante._id} />
            ))}
        </div>
    );
};
