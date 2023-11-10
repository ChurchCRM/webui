import { Route, Routes } from "react-router-dom";
import App from "./App";
import ForgotPasswordView from "./components/views/forgot-password-view/ForgotPasswordView";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/forgot-password" element={<ForgotPasswordView />} />
        </Routes>
    );
}

export default MainRoutes;