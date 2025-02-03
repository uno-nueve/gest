import { FeatureCard } from "@/components/common/card/feature-card";
import { useAppSelector } from "@/hooks/rtk";
import { features } from "@/utils/features";

export const InfoPage = () => {
    const session = useAppSelector((state) => state.session.session);

    return (
        <div>
            <div className="py-4 border-b border-neutral-300">
                <h1 className="text-2xl font-bold">
                    ¡Hola, <span className="text-orange-500">{session?.name}</span>!
                </h1>
                <p className="text-sm font-medium text-neutral-400">
                    Te damos la bienvenida a GEst.
                </p>
            </div>
            <div className="flex flex-col items-center max-w-screen-lg py-4 mx-auto">
                <p className="mb-8 text-3xl font-semibold">Con GEst podrás...</p>
                <div className="grid grid-cols-3 gap-4">
                    {features.map(({ src, alt, description }, index) => (
                        <FeatureCard src={src} alt={alt} description={description} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
