import { Button } from "@/components/ui/button/button";
import { Navbar } from "@/components/ui/navbar/navbar";

export type TNavlink = {
    target: string;
    label: string;
};

export const Header = () => {
    const navlinks: TNavlink[] = [
        { target: "/", label: "Inicio" },
        { target: "estudiantes", label: "Estudiantes" },
        { target: "cursos", label: "Cursos" },
    ];

    return (
        <header className="flex items-center justify-between h-20 px-10 bg-neutral-800">
            <span className="text-4xl text-white">GEst.</span>
            <Navbar links={navlinks} />
            <Button>Cerrar sesión</Button>
        </header>
    );
};
