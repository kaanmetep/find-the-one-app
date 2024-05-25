import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import { AuthProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Statistics from "./components/Statistics";
import Profile from "./components/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import "./App.css";
function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <UserProvider>
                    <Dashboard />
                  </UserProvider>
                </ProtectedRoute>
              }
            >
              <Route path="statistics" element={<Statistics />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route
              path="*"
              element={
                <h1 className="text-2xl m-1 text-red-400 font-semibold">
                  We are sorry but the page you are looking for does not exist..
                </h1>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
