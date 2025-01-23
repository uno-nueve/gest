import { Footer } from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header/header";
import { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="max-w-screen-lg min-h-screen mx-auto my-0">
            <Header />
            <div className="min-h-[calc(100vh-160px)] h-full p-4 overflow-hidden">{children}</div>
            <Footer />
        </div>
    );
};
