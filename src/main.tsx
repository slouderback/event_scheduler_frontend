import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ProtectedRoute } from "./ProtectedRoute.tsx";
import { Login } from "./pages/Login.tsx";
import { Signup } from "./pages/Signup.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { Events } from "./pages/Events.tsx";
import Settings from "./pages/Settings.tsx";
import Speakers from "./pages/Speakers.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queries.ts";
import DashboardLayout from "./components/layout/DashboardLayout.tsx";
import { EventDashboard } from "./pages/EventDashboard.tsx";
import { EventProvider } from "./contexts/EventContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <EventProvider>
          <BrowserRouter>
            <Routes>
              <Route index path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />

              <Route element={<ProtectedRoute isAllowed={true} />}>
                <Route path="events" element={<Events />} />
                <Route element={<DashboardLayout />}>
                  <Route index element={<EventDashboard />} />

                  <Route path="settings">
                    <Route index element={<Settings />} />
                  </Route>

                  <Route path="speakers">
                    <Route index element={<Speakers />} />
                  </Route>
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </EventProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
