import { Profile } from "@/components/common/profile/profile";
import { mockdata } from "@/utils/mock-data";

const data = mockdata[0];

export const ProfilePage = () => {
    return <Profile data={data} />;
};
