import { Footer } from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header/header";
import { ReactNode } from "react";
import { MenuBar } from "../common/menu/menu";

export const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="relative min-h-screen mx-auto my-0 antialiased bg-image">
            <Header />
            <MenuBar />
            <div className="m-auto max-w-screen-xl min-h-[calc(100vh-160px)] h-full px-4 border-x border-neutral-300 bg-neutral-50">
                {children}
            </div>
            <Footer />
        </div>
    );
};
