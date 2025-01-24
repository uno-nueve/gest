import { Button } from "@/components/ui/button/button";
import { Navbar } from "@/components/ui/navbar/navbar";
import { Link } from "react-router";

export type TNavlink = {
    target: string;
    label: string;
};

export const Header = () => {
    const navlinks: TNavlink[] = [
        { target: "info", label: "Inicio" },
        { target: "estudiantes", label: "Estudiantes" },
        { target: "cursos", label: "Cursos" },
    ];

    return (
        <header className="sticky top-0 bg-neutral-800">
            <div className="flex items-center justify-between h-20 max-w-screen-xl px-10 m-auto border-x border-neutral-700">
                <Link to="/" className="text-4xl font-bold text-white font-rokkitt">
                    GEst.
                </Link>
                <Navbar links={navlinks} />
                <Button variant="secondary" size="sm">
                    Cerrar sesión
                </Button>
            </div>
        </header>
    );
};
