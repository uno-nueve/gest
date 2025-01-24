import { useLocation } from "react-router";

export const Footer = () => {
    const year = new Date().getFullYear();
    const location = useLocation();

    return location.pathname !== "/" ? (
        <footer className="border-t bg-neutral-50 border-neutral-300">
            <div className="flex items-center justify-center h-[79px] max-w-screen-xl m-auto border-x border-neutral-300" />
        </footer>
    ) : (
        <footer className="text-white bg-neutral-800">
            <div className="flex items-center justify-center h-20 max-w-screen-xl m-auto border-x border-neutral-700">
                <p>
                    © <span>{year}</span> GEst. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};
