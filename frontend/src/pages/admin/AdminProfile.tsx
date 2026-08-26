import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import api from "../../utils/api";
import { Save, Upload } from "lucide-react";

export default function AdminProfile() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data } = await api.get("/profile");
      setProfile(data);
    } catch (error) {
      toast.error("Error al cargar el perfil");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (section: string, field: string, value: string) => {
    setProfile((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfile((prev: any) => ({
        ...prev,
        newImageFile: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const formData = new FormData();
      
      // Añadir datos como JSON stringificado o campos separados
      // Para Profile, la API espera un objeto JSON, pero si enviamos FormData por la imagen
      // Tenemos que estructurarlo. El controlador que hicimos hace req.body 
      // Por simplicidad en la subida, enviaremos los datos vitales anidados.
      formData.append("hero[saludo]", profile.hero?.saludo || "");
      formData.append("hero[saludo_en]", profile.hero?.saludo_en || "");
      formData.append("hero[nombre]", profile.hero?.nombre || "");
      formData.append("hero[apellido]", profile.hero?.apellido || "");
      formData.append("hero[rol]", profile.hero?.rol || "");
      formData.append("hero[rol_en]", profile.hero?.rol_en || "");
      formData.append("hero[descripcion]", profile.hero?.descripcion || "");
      formData.append("hero[descripcion_en]", profile.hero?.descripcion_en || "");
      formData.append("sobreMi[titulo]", profile.sobreMi?.titulo || "");
      formData.append("sobreMi[descripcion]", profile.sobreMi?.descripcion || "");

      if (profile.newImageFile) {
        formData.append("image", profile.newImageFile);
      }

      await api.put("/profile", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      
      toast.success("Perfil actualizado correctamente");
      fetchProfile();
    } catch (error) {
      toast.error("Error al actualizar el perfil");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Cargando perfil...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gold-400">Editar Perfil</h1>
        <button
          onClick={handleSubmit}
          disabled={saving}
          className="flex items-center px-4 py-2 bg-gold-500 text-ink-950 font-bold rounded-lg hover:bg-gold-400 transition-colors"
        >
          <Save className="w-5 h-5 mr-2" />
          {saving ? "Guardando..." : "Guardar Cambios"}
        </button>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Sección Hero */}
        <div className="bg-ink-900 p-6 rounded-xl border border-ink-800">
          <h2 className="text-xl font-bold mb-4 border-b border-ink-800 pb-2">Presentación (Hero)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm text-ink-300 mb-1">Foto de Perfil</label>
              <div className="flex items-center space-x-4">
                {(profile.newImageFile || profile.hero?.fotoUrl) && (
                  <img 
                    src={profile.newImageFile ? URL.createObjectURL(profile.newImageFile) : profile.hero.fotoUrl} 
                    alt="Perfil" 
                    className="w-20 h-20 rounded-full object-cover border-2 border-gold-500"
                  />
                )}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center px-4 py-2 border border-ink-700 rounded-lg hover:bg-ink-800 transition-colors"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Subir Nueva Foto
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden" 
                />
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-ink-300 mb-1">Nombre</label>
                <input
                  type="text"
                  value={profile.hero?.nombre || ""}
                  onChange={(e) => handleChange("hero", "nombre", e.target.value)}
                  className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
                />
              </div>
              <div>
                <label className="block text-sm text-ink-300 mb-1">Apellido</label>
                <input
                  type="text"
                  value={profile.hero?.apellido || ""}
                  onChange={(e) => handleChange("hero", "apellido", e.target.value)}
                  className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-ink-300 mb-1">Saludo (ES)</label>
              <input
                type="text"
                value={profile.hero?.saludo || ""}
                onChange={(e) => handleChange("hero", "saludo", e.target.value)}
                className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
              />
            </div>
            <div>
              <label className="block text-sm text-ink-300 mb-1">Saludo (EN)</label>
              <input
                type="text"
                value={profile.hero?.saludo_en || ""}
                onChange={(e) => handleChange("hero", "saludo_en", e.target.value)}
                className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
              />
            </div>

            <div>
              <label className="block text-sm text-ink-300 mb-1">Rol (ES)</label>
              <input
                type="text"
                value={profile.hero?.rol || ""}
                onChange={(e) => handleChange("hero", "rol", e.target.value)}
                className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
              />
            </div>
            <div>
              <label className="block text-sm text-ink-300 mb-1">Rol (EN)</label>
              <input
                type="text"
                value={profile.hero?.rol_en || ""}
                onChange={(e) => handleChange("hero", "rol_en", e.target.value)}
                className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
              />
            </div>
            
            <div className="col-span-2">
              <label className="block text-sm text-ink-300 mb-1">Descripción Corta (ES)</label>
              <textarea
                value={profile.hero?.descripcion || ""}
                onChange={(e) => handleChange("hero", "descripcion", e.target.value)}
                rows={3}
                className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm text-ink-300 mb-1">Descripción Corta (EN)</label>
              <textarea
                value={profile.hero?.descripcion_en || ""}
                onChange={(e) => handleChange("hero", "descripcion_en", e.target.value)}
                rows={3}
                className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
              />
            </div>
          </div>
        </div>

        {/* Sección Sobre Mi */}
        <div className="bg-ink-900 p-6 rounded-xl border border-ink-800">
          <h2 className="text-xl font-bold mb-4 border-b border-ink-800 pb-2">Sobre Mí</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm text-ink-300 mb-1">Título</label>
              <input
                type="text"
                value={profile.sobreMi?.titulo || ""}
                onChange={(e) => handleChange("sobreMi", "titulo", e.target.value)}
                className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
              />
            </div>
            <div>
              <label className="block text-sm text-ink-300 mb-1">Descripción</label>
              <textarea
                value={profile.sobreMi?.descripcion || ""}
                onChange={(e) => handleChange("sobreMi", "descripcion", e.target.value)}
                rows={4}
                className="w-full bg-ink-950 border border-ink-800 rounded-lg px-3 py-2 text-ink-50"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
