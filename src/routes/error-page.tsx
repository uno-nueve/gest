import { ArrowLeft } from "@/components/ui/svg/left-arrow";
import { Link, useRouteError } from "react-router";

export const ErrorPage = () => {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div className="flex items-center justify-center w-screen h-screen text-white bg-neutral-800">
            <h1 className="text-2xl font-bold">Ocurrió un error inesperado</h1>
            <p className="text-xl text-orange-500">
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/" className="flex items-center gap-2">
                <ArrowLeft /> Volver al inicio
            </Link>
        </div>
    );
};
