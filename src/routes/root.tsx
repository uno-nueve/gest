import { Outlet } from "react-router";

export const Root = () => {
    return (
        <div className="bg-neutral-50 font-geist">
            <Outlet />
        </div>
    );
};
