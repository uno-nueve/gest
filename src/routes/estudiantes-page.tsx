import { DeleteModal } from "@/components/common/modal/delete-modal";
import { Button } from "@/components/ui/button/button";
import { Link, Outlet, useLocation } from "react-router";

export const EstudiantesPage = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col gap-4">
            {location.pathname === "/app/estudiantes" && (
                <div className="sticky flex items-center justify-between w-full py-4 border-b top-20 border-neutral-300 bg-[rbga(250,250,250,0.4)] backdrop-blur">
                    <h1 className="text-2xl font-bold">Estudiantes</h1>
                    <Link to="nuevo">
                        <Button>Nuevo estudiante</Button>
                    </Link>
                </div>
            )}
            <Outlet />
            <DeleteModal />
        </div>
    );
};
