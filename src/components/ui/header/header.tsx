import { Button } from "@/components/ui/button/button";
import { Navbar } from "@/components/ui/navbar/navbar";
import { useAppSelector } from "@/hooks/rtk";
import { removeSession } from "@/state/session/session-slice";
import { googleLogout } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { Link } from "react-router";

export type TNavlink = {
    target: string;
    label: string;
};

export const Header = () => {
    const session = useAppSelector((state) => state.session.session);
    const dispatch = useDispatch();
    const navlinks: TNavlink[] = [
        { target: "info", label: "Inicio" },
        { target: "estudiantes", label: "Estudiantes" },
        { target: "cursos", label: "Cursos" },
    ];

    function handleLogout() {
        googleLogout();
        dispatch(removeSession());
    }

    return (
        <header className="sticky top-0 bg-neutral-800">
            <div className="flex items-center justify-between h-20 max-w-screen-xl px-10 m-auto border-x border-neutral-700">
                <Link to="/" className="text-4xl font-bold text-white font-rokkitt">
                    GEst.
                </Link>
                <Navbar links={navlinks} />
                <div className="flex items-center gap-2">
                    <img
                        src={session?.picture}
                        alt={session?.name}
                        className="w-8 h-8 rounded-full"
                    />
                    <Button variant="secondary" size="sm" onClick={handleLogout}>
                        Cerrar sesión
                    </Button>
                </div>
            </div>
        </header>
    );
};
