import { useState, useEffect } from "react";
import { toast } from "sonner";
import api from "../../utils/api";
import { Edit2, Trash2, Plus, X } from "lucide-react";

export default function AdminExperience() {
  const [experiences, setExperiences] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentExp, setCurrentExp] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const { data } = await api.get("/experience");
      setExperiences(data);
    } catch (error) {
      toast.error("Error al cargar experiencias");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás segura de eliminar esta entrada?")) return;
    try {
      await api.delete(`/experience/${id}`);
      toast.success("Entrada eliminada");
      fetchExperiences();
    } catch (error) {
      toast.error("Error al eliminar entrada");
    }
  };

  const openModal = (exp?: any) => {
    setCurrentExp(exp || { titulo: "", fecha: "", descripcion: "", tipo: "educacion", orden: 0 });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      if (currentExp._id) {
        await api.put(`/experience/${currentExp._id}`, currentExp);
        toast.success("Entrada actualizada");
      } else {
        await api.post("/experience", currentExp);
        toast.success("Entrada creada");
      }
      
      setIsModalOpen(false);
      fetchExperiences();
    } catch (error) {
      toast.error("Error al guardar entrada");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gold-400">Mi Recorrido</h1>
        <button
          onClick={() => openModal()}
          className="flex items-center px-4 py-2 bg-gold-500 text-ink-950 font-bold rounded-lg hover:bg-gold-400 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Nueva Entrada
        </button>
      </div>

      <div className="bg-ink-900 border border-ink-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm text-ink-300">
          <thead className="bg-ink-950 border-b border-ink-800 text-ink-50 uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">Fecha</th>
              <th className="px-6 py-4">Título</th>
              <th className="px-6 py-4">Tipo</th>
              <th className="px-6 py-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {experiences.map((exp) => (
              <tr key={exp._id} className="border-b border-ink-800/50 hover:bg-ink-800/50 transition-colors">
                <td className="px-6 py-4">{exp.fecha}</td>
                <td className="px-6 py-4 font-medium text-ink-50">{exp.titulo}</td>
                <td className="px-6 py-4 capitalize">{exp.tipo}</td>
                <td className="px-6 py-4 flex justify-end space-x-2">
                  <button 
                    onClick={() => openModal(exp)}
                    className="p-2 text-gold-400 hover:bg-gold-400/10 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(exp._id)}
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
                {currentExp._id ? "Editar Entrada" : "Nueva Entrada"}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-ink-400 hover:text-ink-50">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-4 space-y-4">
              <div>
                <label className="block text-sm text-ink-300 mb-1">Título</label>
                <input
                  type="text"
                  required
                  value={currentExp.titulo}
                  onChange={(e) => setCurrentExp({...currentExp, titulo: e.target.value})}
                  className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-ink-300 mb-1">Fecha / Año</label>
                  <input
                    type="text"
                    required
                    value={currentExp.fecha}
                    onChange={(e) => setCurrentExp({...currentExp, fecha: e.target.value})}
                    className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-ink-300 mb-1">Tipo</label>
                  <select
                    value={currentExp.tipo}
                    onChange={(e) => setCurrentExp({...currentExp, tipo: e.target.value})}
                    className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
                  >
                    <option value="educacion">Educación</option>
                    <option value="curso">Curso</option>
                    <option value="logro">Logro</option>
                    <option value="trabajo">Trabajo</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-ink-300 mb-1">Descripción</label>
                <textarea
                  required
                  rows={3}
                  value={currentExp.descripcion}
                  onChange={(e) => setCurrentExp({...currentExp, descripcion: e.target.value})}
                  className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
                />
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
