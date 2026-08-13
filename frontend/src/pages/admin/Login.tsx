import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import api from "../../utils/api";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/auth/login", { usuario, password });
      localStorage.setItem("token", response.data.token);
      toast.success("¡Bienvenida de nuevo!");
      navigate("/admin");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-ink-950 px-4">
      <div className="max-w-md w-full bg-ink-900 rounded-2xl p-8 border border-gold-500/20 shadow-2xl shadow-gold-500/10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gold-400 mb-2">Admin Panel</h2>
          <p className="text-ink-400">Inicia sesión para editar tu portafolio</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-ink-300 mb-1">
              Usuario
            </label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full bg-ink-950 border border-ink-800 rounded-lg px-4 py-3 text-ink-50 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink-300 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-ink-950 border border-ink-800 rounded-lg px-4 py-3 text-ink-50 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold-500 hover:bg-gold-400 text-ink-950 font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? "Cargando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}
