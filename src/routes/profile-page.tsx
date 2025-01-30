import { Profile } from "@/components/common/profile/profile";
import { useShowEstudiante } from "@/hooks/use-show-estudiante";

export const ProfilePage = () => {
    const estudiante = useShowEstudiante();

    return <Profile data={estudiante} />;
};
