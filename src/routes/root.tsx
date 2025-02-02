import { useAppSelector } from "@/hooks/rtk";
import { setSession } from "@/state/session/session-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router";

export const Root = () => {
    const session = useAppSelector((state) => state.session.session);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("SESSION", session);

    useEffect(() => {
        const persistedSession = localStorage.getItem("session");
        if (persistedSession && !session) {
            dispatch(setSession(JSON.parse(persistedSession)));
        } else navigate("/login");
        if (session && session.email) navigate("/app");
    }, [session]);

    return (
        <div className="bg-neutral-50 font-geist">
            <Outlet />
        </div>
    );
};
