import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ForgotPasswordView from "./views/forgot-password-view/ForgotPasswordView";
import LoginView from "./views/login-view/LoginView";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <LoginView />
        },
        {
          path: "/forgot-password",
          element: <ForgotPasswordView />
        },
      ]
    }
  ]);

export default router;