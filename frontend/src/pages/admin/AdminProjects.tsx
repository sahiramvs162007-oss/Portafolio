import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import api from "../../utils/api";
import { Edit2, Trash2, Plus, X } from "lucide-react";

export default function AdminProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await api.get("/projects");
      setProjects(data);
    } catch (error) {
      toast.error("Error al cargar proyectos");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás segura de eliminar este proyecto?")) return;
    try {
      await api.delete(`/projects/${id}`);
      toast.success("Proyecto eliminado");
      fetchProjects();
    } catch (error) {
      toast.error("Error al eliminar proyecto");
    }
  };

  const openModal = (project?: any) => {
    setCurrentProject(project || { titulo: "", descripcion: "", githubUrl: "", demoUrl: "" });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const formData = new FormData();
      formData.append("titulo", currentProject.titulo);
      formData.append("descripcion", currentProject.descripcion);
      if (currentProject.githubUrl) formData.append("githubUrl", currentProject.githubUrl);
      if (currentProject.demoUrl) formData.append("demoUrl", currentProject.demoUrl);
      
      if (currentProject.newImageFile) {
        formData.append("image", currentProject.newImageFile);
      }

      if (currentProject._id) {
        await api.put(`/projects/${currentProject._id}`, formData);
        toast.success("Proyecto actualizado");
      } else {
        await api.post("/projects", formData);
        toast.success("Proyecto creado");
      }
      
      setIsModalOpen(false);
      fetchProjects();
    } catch (error) {
      toast.error("Error al guardar proyecto");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gold-400">Proyectos</h1>
        <button
          onClick={() => openModal()}
          className="flex items-center px-4 py-2 bg-gold-500 text-ink-950 font-bold rounded-lg hover:bg-gold-400 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Nuevo Proyecto
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div key={proj._id} className="bg-ink-900 border border-ink-800 rounded-xl p-4 flex flex-col">
            {proj.imagenUrl && (
              <img src={proj.imagenUrl} alt={proj.titulo} className="w-full h-40 object-cover rounded-lg mb-4" />
            )}
            <h3 className="font-bold text-lg text-ink-50 mb-2">{proj.titulo}</h3>
            <p className="text-sm text-ink-300 line-clamp-3 mb-4 flex-1">{proj.descripcion}</p>
            
            <div className="flex justify-end space-x-2 mt-auto pt-4 border-t border-ink-800">
              <button 
                onClick={() => openModal(proj)}
                className="p-2 text-gold-400 hover:bg-gold-400/10 rounded-lg transition-colors"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleDelete(proj._id)}
                className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Modal Modal Modal Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-ink-900 rounded-xl w-full max-w-lg border border-ink-800 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-ink-800">
              <h2 className="text-lg font-bold text-gold-400">
                {currentProject._id ? "Editar Proyecto" : "Nuevo Proyecto"}
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
                  value={currentProject.titulo}
                  onChange={(e) => setCurrentProject({...currentProject, titulo: e.target.value})}
                  className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
                />
              </div>
              <div>
                <label className="block text-sm text-ink-300 mb-1">Descripción</label>
                <textarea
                  required
                  rows={3}
                  value={currentProject.descripcion}
                  onChange={(e) => setCurrentProject({...currentProject, descripcion: e.target.value})}
                  className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-ink-300 mb-1">GitHub URL</label>
                  <input
                    type="url"
                    value={currentProject.githubUrl}
                    onChange={(e) => setCurrentProject({...currentProject, githubUrl: e.target.value})}
                    className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-ink-300 mb-1">Demo URL</label>
                  <input
                    type="url"
                    value={currentProject.demoUrl}
                    onChange={(e) => setCurrentProject({...currentProject, demoUrl: e.target.value})}
                    className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-ink-300 mb-1">Imagen del Proyecto</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setCurrentProject({...currentProject, newImageFile: e.target.files[0]});
                    }
                  }}
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
