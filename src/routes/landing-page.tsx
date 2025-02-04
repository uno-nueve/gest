import { Button } from "@/components/ui/button/button";
import { Footer } from "@/components/ui/footer/footer";
import { Link } from "react-router";

export const LandingPage = () => {
    return (
        <div className="h-screen text-neutral-800 bg-neutral-50 bg-image">
            <div className="flex flex-col items-center h-[calc(100vh-80px)] justify-evenly">
                <div className="flex flex-col items-center">
                    <h1 className="font-rokkitt text-9xl sm:text-[10rem] leading-none font-bold">
                        GEst.
                    </h1>
                    <h2 className="text-lg sm:text-xl">📝 Gestión estudiantil simplificada.</h2>
                </div>
                <Link to="login">
                    <Button size="lg">Ingresar</Button>
                </Link>
            </div>
            <Footer />
        </div>
    );
};
