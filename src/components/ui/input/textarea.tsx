export const Textarea = ({
    id,
    name,
    placeholder,
}: {
    id: string;
    name: string;
    placeholder: string;
}) => {
    return (
        <textarea
            className="w-full px-4 py-2 bg-white rounded-lg resize-none"
            id={id}
            name={name}
            rows={3}
            placeholder={placeholder}
        />
    );
};
