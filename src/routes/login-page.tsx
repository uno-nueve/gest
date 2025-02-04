import { ArrowLeft } from "@/components/ui/svg/left-arrow";
import { useAppDispatch, useAppSelector } from "@/hooks/rtk";
import { setSession } from "@/state/session/session-slice";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router";

export const LoginPage = () => {
    const session = useAppSelector((state) => state.session.session);
    const navigate = useNavigate();

    if (session && session.email) {
        navigate("/app");
    }
    useEffect(() => {
        if (session && session.email) {
            navigate("/app");
        }
    }, [session]);

    return (
        <div className="grid h-screen grid-cols-1 md:grid-cols-2 text-neutral-800 bg-neutral-50 bg-image">
            <div className="flex flex-col items-center justify-center bg-neutral-800">
                <h1 className="font-rokkitt text-9xl sm:text-[10rem] leading-none font-bold text-white">
                    GEst.
                </h1>
                <LoginButton />
                <Link to="/" className="flex items-center gap-2 mt-8 text-lg text-white">
                    <ArrowLeft /> Inicio
                </Link>
            </div>
            <div className="hidden md:block" />
        </div>
    );
};

const LoginButton = () => {
    const dispatch = useAppDispatch();

    return (
        <GoogleLogin
            onSuccess={(res) => {
                const userInfo = jwtDecode(res.credential);
                const { email, name, exp, picture } = userInfo;
                dispatch(setSession({ email, name, exp, picture }));
            }}
            onError={() => console.error("LOGIN FAILED")}
        />
    );
};
