import { Footer } from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header/header";
import { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen mx-auto my-0 ">
            <Header />
            <div className="m-auto max-w-screen-xl min-h-[calc(100vh-160px)] h-full px-4 border-x border-neutral-300">
                {children}
            </div>
            <Footer />
        </div>
    );
};
