import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import RedirectAuthenticatedUser from "./RedirectAuthenticatedUser";

import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import EmailVerificationPage from "../pages/EmailVerificationPage";
import DashboardPage from "../pages/DashboardPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";

const RouteRouter = () => (
  <Routes>
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/signup"
      element={
        <RedirectAuthenticatedUser>
          <SignUpPage />
        </RedirectAuthenticatedUser>
      }
    />
    <Route
      path="/login"
      element={
        <RedirectAuthenticatedUser>
          <LoginPage />
        </RedirectAuthenticatedUser>
      }
    />
    <Route path="/verify-email" element={<EmailVerificationPage />} />
    <Route
      path="/forgot-password"
      element={
        <RedirectAuthenticatedUser>
          <ForgotPasswordPage />
        </RedirectAuthenticatedUser>
      }
    />
    <Route
      path="/reset-password/:token"
      element={
        <RedirectAuthenticatedUser>
          <ResetPasswordPage />
        </RedirectAuthenticatedUser>
      }
    />
    {/* Catch all routes */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default RouteRouter;
