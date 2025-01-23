import { createBrowserRouter, RouterProvider } from "react-router";
import { Root } from "@/routes/root";
import { DashboardPage } from "@/routes/dashboard-page";
import { CursosPage } from "@/routes/cursos-page";
import { LoginPage } from "@/routes/login-page";
import { EstudiantesPage } from "@/routes/estudiantes-page";
import { ProfilePage } from "@/routes/profile-page";
import { CreatePage } from "@/routes/create-page";
import { EditPage } from "@/routes/edit-page";
import { LandingPage } from "./routes/landing-page";
import { ErrorPage } from "./routes/error-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { element: <LandingPage />, index: true },
            { path: "login", element: <LoginPage /> },
            {
                path: "app",
                element: <DashboardPage />,
                children: [
                    { element: <EstudiantesPage />, index: true },
                    {
                        path: "estudiantes",
                        element: <EstudiantesPage />,
                        children: [
                            {
                                path: ":id",
                                element: <ProfilePage />,
                            },
                            { path: ":id/editar", element: <EditPage /> },
                            { path: "nuevo", element: <CreatePage /> },
                        ],
                    },
                    { path: "cursos", element: <CursosPage /> },
                ],
            },
        ],
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
