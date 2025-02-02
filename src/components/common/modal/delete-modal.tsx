import { Button } from "@/components/ui/button/button";
import { useAppDispatch, useAppSelector } from "@/hooks/rtk";
import { useAxios } from "@/hooks/use-axios";
import { showModal } from "@/state/modal/modal-slice";
import { ESTUDIANTES } from "@/utils/urls";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const DeleteModal = ({ id }: { id: string }) => {
    const visible = useAppSelector((state) => state.modal.visible);
    const dispatch = useAppDispatch();
    const { DELETE, status } = useAxios();
    const navigate = useNavigate();

    async function onDelete() {
        await DELETE(`${ESTUDIANTES}/${id}`);
        dispatch(showModal(false));
    }

    useEffect(() => {
        console.log(status);
        if (status === 200) {
            navigate(-1);
        }
    }, [status]);

    return (
        <dialog
            className={
                visible
                    ? "absolute flex items-center justify-center bottom-0 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"
                    : "hidden"
            }
        >
            <div className="w-full overflow-hidden bg-white rounded-2xl h-max max-w-96">
                <div className="p-4 font-semibold bg-neutral-200">¿Eliminar estudiante?</div>
                <div className="p-4 text-sm border-b text-neutral-400 border-neutral-200">
                    Esta acción no se puede revertir
                </div>
                <div className="flex justify-end gap-2 p-4">
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => dispatch(showModal(false))}
                    >
                        Cancelar
                    </Button>
                    <Button variant="destructive" size="sm" onClick={onDelete}>
                        Eliminar
                    </Button>
                </div>
            </div>
        </dialog>
    );
};
