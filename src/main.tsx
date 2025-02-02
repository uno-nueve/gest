import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./router";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = import.meta.env.VITE_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GoogleOAuthProvider clientId={clientId}>
            <Provider store={store}>
                <App />
            </Provider>
        </GoogleOAuthProvider>
    </StrictMode>
);
