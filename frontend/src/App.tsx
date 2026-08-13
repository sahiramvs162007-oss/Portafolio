import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import Login from "./pages/admin/Login";
import AdminLayout from "./pages/admin/layouts/AdminLayout";
import AdminProfile from "./pages/admin/AdminProfile";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminTechnologies from "./pages/admin/AdminTechnologies";
import AdminExperience from "./pages/admin/AdminExperience";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<Home />} />
        
        {/* Rutas de Administrador */}
        <Route path="/admin/login" element={<Login />} />
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/perfil" replace />} />
          <Route path="perfil" element={<AdminProfile />} />
          <Route path="proyectos" element={<AdminProjects />} />
          <Route path="tecnologias" element={<AdminTechnologies />} />
          <Route path="experiencia" element={<AdminExperience />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
