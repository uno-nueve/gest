export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="text-white bg-neutral-800">
            <div className="flex items-center justify-center h-20 max-w-screen-xl m-auto border-x border-neutral-700">
                <p>
                    © <span>{year}</span> GEst. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};
