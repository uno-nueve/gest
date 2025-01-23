import { NavLink } from "react-router";
import type { TNavlink } from "@/components/ui/header/header";

export const Navbar = ({ links }: { links: TNavlink[] }) => {
    return (
        <nav className="flex justify-between font-medium w-80">
            {links.map(({ target, label }) => (
                <NavLink
                    to={target}
                    className={({ isActive }) => (isActive ? "text-white" : "text-neutral-400")}
                    key={target}
                >
                    {label}
                </NavLink>
            ))}
        </nav>
    );
};
