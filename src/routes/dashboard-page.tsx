import { MainLayout } from "@/components/layouts/main-layout";
import { Outlet } from "react-router";

export const DashboardPage = () => {
    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    );
};
