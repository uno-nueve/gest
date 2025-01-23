import { Footer } from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header/header";
import { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="max-w-screen-xl min-h-screen mx-auto my-0">
            <Header />
            <div className="min-h-[calc(100vh-160px)] h-full px-4">{children}</div>
            <Footer />
        </div>
    );
};
