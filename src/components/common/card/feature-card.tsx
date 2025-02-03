import { TFeature } from "@/utils/features";

export const FeatureCard = ({ src, alt, description }: TFeature) => (
    <div className="flex flex-col gap-2 p-2 rounded-2xl">
        <img loading="lazy" className="w-full border rounded-lg" src={src} alt={alt} />
        <p className="p-2 text-white rounded-lg bg-neutral-800">{description}</p>
    </div>
);
