import { createBrowserRouter, RouterProvider } from "react-router";
import { Root } from "@/routes/root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "login", element: <></> },
            { path: "nuevo", element: <></> },
            {
                path: "estudiantes",
                element: <></>,
                children: [
                    { path: ":id", element: <></>, children: [{ path: "editar", element: <></> }] },
                ],
            },
        ],
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
