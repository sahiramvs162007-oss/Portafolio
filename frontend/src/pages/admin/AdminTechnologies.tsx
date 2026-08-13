import { useState, useEffect } from "react";
import { toast } from "sonner";
import api from "../../utils/api";
import { Edit2, Trash2, Plus, X } from "lucide-react";

export default function AdminTechnologies() {
  const [technologies, setTechnologies] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTech, setCurrentTech] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const fetchTechnologies = async () => {
    try {
      const { data } = await api.get("/technologies");
      setTechnologies(data);
    } catch (error) {
      toast.error("Error al cargar tecnologías");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás segura de eliminar esta tecnología?")) return;
    try {
      await api.delete(`/technologies/${id}`);
      toast.success("Tecnología eliminada");
      fetchTechnologies();
    } catch (error) {
      toast.error("Error al eliminar tecnología");
    }
  };

  const openModal = (tech?: any) => {
    setCurrentTech(tech || { nombre: "", icono: "", categoria: "other", orden: 0 });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      if (currentTech._id) {
        await api.put(`/technologies/${currentTech._id}`, currentTech);
        toast.success("Tecnología actualizada");
      } else {
        await api.post("/technologies", currentTech);
        toast.success("Tecnología creada");
      }
      
      setIsModalOpen(false);
      fetchTechnologies();
    } catch (error) {
      toast.error("Error al guardar tecnología");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gold-400">Tecnologías</h1>
        <button
          onClick={() => openModal()}
          className="flex items-center px-4 py-2 bg-gold-500 text-ink-950 font-bold rounded-lg hover:bg-gold-400 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Nueva Tecnología
        </button>
      </div>

      <div className="bg-ink-900 border border-ink-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm text-ink-300">
          <thead className="bg-ink-950 border-b border-ink-800 text-ink-50 uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">Nombre</th>
              <th className="px-6 py-4">Ícono</th>
              <th className="px-6 py-4">Categoría</th>
              <th className="px-6 py-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {technologies.map((tech) => (
              <tr key={tech._id} className="border-b border-ink-800/50 hover:bg-ink-800/50 transition-colors">
                <td className="px-6 py-4 font-medium text-ink-50">{tech.nombre}</td>
                <td className="px-6 py-4">{tech.icono}</td>
                <td className="px-6 py-4 capitalize">{tech.categoria}</td>
                <td className="px-6 py-4 flex justify-end space-x-2">
                  <button 
                    onClick={() => openModal(tech)}
                    className="p-2 text-gold-400 hover:bg-gold-400/10 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(tech._id)}
                    className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Modal Modal Modal Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-ink-900 rounded-xl w-full max-w-md border border-ink-800 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-ink-800">
              <h2 className="text-lg font-bold text-gold-400">
                {currentTech._id ? "Editar Tecnología" : "Nueva Tecnología"}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-ink-400 hover:text-ink-50">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-4 space-y-4">
              <div>
                <label className="block text-sm text-ink-300 mb-1">Nombre</label>
                <input
                  type="text"
                  required
                  value={currentTech.nombre}
                  onChange={(e) => setCurrentTech({...currentTech, nombre: e.target.value})}
                  className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
                />
              </div>
              <div>
                <label className="block text-sm text-ink-300 mb-1">Nombre del Ícono (ej: FaReact)</label>
                <input
                  type="text"
                  required
                  value={currentTech.icono}
                  onChange={(e) => setCurrentTech({...currentTech, icono: e.target.value})}
                  className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
                />
              </div>
              <div>
                <label className="block text-sm text-ink-300 mb-1">Categoría</label>
                <select
                  value={currentTech.categoria}
                  onChange={(e) => setCurrentTech({...currentTech, categoria: e.target.value})}
                  className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
                >
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="db">Base de Datos</option>
                  <option value="tools">Herramientas</option>
                  <option value="other">Otros</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-ink-700 text-ink-300 hover:text-ink-50 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-4 py-2 bg-gold-500 text-ink-950 font-bold rounded-lg hover:bg-gold-400 transition-colors"
                >
                  {saving ? "Guardando..." : "Guardar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
