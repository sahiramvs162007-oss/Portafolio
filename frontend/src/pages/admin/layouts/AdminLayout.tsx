import { Navigate, Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { User, Briefcase, Code, GraduationCap, LogOut, LayoutDashboard } from "lucide-react";
import { useEffect, useState } from "react";

export default function AdminLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  if (isAuthenticated === null) return null; // O un spinner
  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;

  const navigation = [
    { name: "Perfil", href: "/admin/perfil", icon: User },
    { name: "Proyectos", href: "/admin/proyectos", icon: Briefcase },
    { name: "Tecnologías", href: "/admin/tecnologias", icon: Code },
    { name: "Experiencia", href: "/admin/experiencia", icon: GraduationCap },
  ];

  return (
    <div className="flex h-screen bg-ink-950 text-ink-50">
      {/* Sidebar */}
      <aside className="w-64 bg-ink-900 border-r border-ink-800 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-ink-800">
          <LayoutDashboard className="text-gold-500 mr-3" />
          <span className="text-lg font-bold text-ink-50">Admin Panel</span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-gold-500/10 text-gold-400 border border-gold-500/20" 
                    : "text-ink-300 hover:bg-ink-800 hover:text-ink-50"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-ink-800">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-ink-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-ink-950">
        {/* Mobile Header */}
        <header className="md:hidden h-16 bg-ink-900 border-b border-ink-800 flex items-center justify-between px-4">
           <span className="font-bold">Admin Panel</span>
           <button onClick={handleLogout} className="text-red-400">
             <LogOut className="w-5 h-5" />
           </button>
        </header>

        <div className="p-6 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
