import { Button } from "@/components/ui/button/button";
import { useAppDispatch, useAppSelector } from "@/hooks/rtk";
import { showMenu } from "@/state/menu/menu-slice";
import { removeSession } from "@/state/session/session-slice";
import { googleLogout } from "@react-oauth/google";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router";

export type TNavlink = {
    target: string;
    label: string;
};

export const MenuBar = () => {
    const session = useAppSelector((state) => state.session.session);
    const visible = useAppSelector((state) => state.menu.visible);
    const dispatch = useDispatch();
    const location = useLocation();

    const navlinks: TNavlink[] = [
        { target: "info", label: "Inicio" },
        { target: "estudiantes", label: "Estudiantes" },
        { target: "cursos", label: "Cursos" },
    ];

    function handleLogout() {
        googleLogout();
        dispatch(removeSession());
    }

    useEffect(() => {
        if (visible) {
            dispatch(showMenu(false));
        }
    }, [location.pathname]);

    return (
        <div
            className={
                !visible
                    ? "hidden h-0 opacity-0"
                    : "fixed flex flex-col z-10 w-full justify-between px-4 py-6 font-medium top-20 bg-neutral-800 h-[calc(100vh-80px)]"
            }
        >
            <div className="flex flex-col gap-4">
                {navlinks.map(({ target, label }) => (
                    <NavLink
                        to={target}
                        className={({ isActive }) => (isActive ? "text-white" : "text-neutral-400")}
                        key={target}
                    >
                        {label}
                    </NavLink>
                ))}
            </div>
            <div className="flex items-center justify-between w-full">
                <Button variant="secondary" size="sm" onClick={handleLogout}>
                    Cerrar sesión
                </Button>
                <img src={session?.picture} alt={session?.name} className="w-8 h-8 rounded-full" />
            </div>
        </div>
    );
};

export const MenuButton = () => {
    const visible = useAppSelector((state) => state.menu.visible);
    const dispatch = useAppDispatch();

    return (
        <div className="p-4 text-white" onClick={() => dispatch(showMenu(!visible))}>
            {visible ? "CERRAR" : "MENU"}
        </div>
    );
};
