import { Button } from "@/components/ui/button/button";
import { Link } from "react-router";

export const LandingPage = () => {
    return (
        <div className="h-screen text-neutral-800 bg-neutral-50 bg-image">
            <div className="flex flex-col items-center h-screen justify-evenly">
                <div className="flex flex-col items-center">
                    <h1 className="font-rokkitt text-[10rem] leading-none font-bold">GEst.</h1>
                    <h2 className="text-xl">Gestion estudiantil simplificada.</h2>
                </div>
                <Link to="login">
                    <Button size="lg">Ingresar</Button>
                </Link>
            </div>
        </div>
    );
};
