import { TFeature } from "@/utils/features";

export const FeatureCard = ({ src, alt, description }: TFeature) => (
    <div className="flex flex-col gap-2 p-2 bg-white border rounded-2xl border-neutral-300">
        <div className="overflow-hidden rounded-lg">
            <img loading="lazy" className="object-cover w-full h-full" src={src} alt={alt} />
        </div>
        <p className="p-2 rounded-lg ">{description}</p>
    </div>
);
