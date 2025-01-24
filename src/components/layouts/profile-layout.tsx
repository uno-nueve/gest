import { ReactNode } from "react";

type ProfileLayoutProps = {
    sideTitle: string;
    sideContent: ReactNode;
    briefTitle: string;
    briefContent: ReactNode;
    bannerContent: ReactNode;
};

export const ProfileLayout = ({
    sideTitle,
    sideContent,
    briefTitle,
    briefContent,
    bannerContent,
}: ProfileLayoutProps) => {
    return (
        <main>
            <div className="flex gap-12 px-4 py-8 border-b border-neutral-300 max-h-[224px]">
                {bannerContent}
            </div>
            <div className="flex min-h-[calc(100vh-384px)]">
                <aside className="flex flex-col gap-4 px-4 py-8 border-r border-neutral-300">
                    <h2 className="text-xl font-bold text-nowrap">{sideTitle}</h2>
                    {sideContent}
                </aside>
                <div className="flex flex-col gap-4 px-4 py-8">
                    <h2 className="text-xl font-bold">{briefTitle}</h2>
                    {briefContent}
                </div>
            </div>
        </main>
    );
};
