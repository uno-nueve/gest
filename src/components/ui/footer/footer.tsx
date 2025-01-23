export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="flex items-center justify-center h-20 text-white bg-neutral-800">
            <p>
                © <span>{year}</span> GEst. Todos los derechos reservados.
            </p>
        </footer>
    );
};
