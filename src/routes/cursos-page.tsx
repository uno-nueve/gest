import { Button } from "@/components/ui/button/button";
import { Dialog, Form, Input } from "@base-ui-components/react";

export const CursosPage = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="sticky flex items-center justify-between w-full py-4 border-b top-20 border-neutral-300 bg-[rbga(250,250,250,0.4)] backdrop-blur">
                <h1 className="text-2xl font-bold">Cursos</h1>
                <Dialog.Root>
                    <Dialog.Trigger render={<Button>Nuevo curso</Button>} />
                    <Dialog.Portal>
                        <Dialog.Backdrop className="fixed inset-0 transition-all duration-150 bg-black opacity-20" />
                        <Dialog.Popup className="fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 transition-all duration-150">
                            <Dialog.Title className="pb-4 text-lg font-bold border-b border-neutral-400">
                                Añadir curso
                            </Dialog.Title>
                            <Form>
                                <Input
                                    required
                                    placeholder="Educación Física"
                                    className="w-full h-8 px-4 py-2 my-4 rounded-lg"
                                    autoFocus
                                />
                                <div className="flex float-right gap-2">
                                    <Dialog.Close
                                        render={<Button variant="secondary">Cancelar</Button>}
                                    />
                                    <Button>Añadir</Button>
                                </div>
                            </Form>
                        </Dialog.Popup>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
            {/* add "Cursos" graphs here */}
        </div>
    );
};
