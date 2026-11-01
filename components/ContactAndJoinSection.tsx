import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Building, MessageSquare, Radio, ExternalLink } from 'lucide-react';

export const ContactAndJoinSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    subject: 'tesis',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#df5a42] bg-[#df5a42]/10 mb-4">
            <Mail size={13} />
            Vinculación & Contacto
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1e1333] leading-tight mb-4">
            Conéctate con el Grupo GENSEX
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Abiertos a la colaboración científica con investigadoras/es, postulación de estudiantes tesistas, asesorías técnicas a organismos públicos y consultas de la comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#e6ded4] shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1e1333]">
                  ¡Mensaje Recibido Correctamente!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Agradecemos tu interés en vincularte con GENSEX. El equipo de coordinación académica revisará tu mensaje y responderá a <strong>{formData.email}</strong> a la brevedad.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', institution: '', subject: 'tesis', message: '' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#2d184c] text-white text-xs font-semibold hover:bg-[#442371] transition-colors cursor-pointer"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#1e1333] mb-2">
                  Formulario de Contacto y Solicitudes
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Francisca Morales"
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#e6ded4] rounded-xl text-sm focus:outline-none focus:border-[#df5a42] text-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@correo.com"
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#e6ded4] rounded-xl text-sm focus:outline-none focus:border-[#df5a42] text-stone-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Institución / Universidad / Colectivo
                    </label>
                    <input
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="Ej. Universidad Autónoma, ONG, Municipalidad"
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#e6ded4] rounded-xl text-sm focus:outline-none focus:border-[#df5a42] text-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Motivo de Contacto
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#e6ded4] rounded-xl text-sm focus:outline-none focus:border-[#df5a42] text-stone-800"
                    >
                      <option value="tesis">Postulación a Tesis / Ayudantía</option>
                      <option value="capacitacion">Capacitación / Asesoría Institucional</option>
                      <option value="colaboracion">Redes de Investigación / Alianzas</option>
                      <option value="publicaciones">Consultas sobre Publicaciones y Datos</option>
                      <option value="prensa">Prensa, Medios y Entrevistas</option>
                      <option value="otro">Otro motivo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Mensaje o Propuesta *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe tu propuesta, consulta o solicitud indicando línea de interés si corresponde..."
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#e6ded4] rounded-xl text-sm focus:outline-none focus:border-[#df5a42] text-stone-900"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2d184c] hover:bg-[#442371] text-white text-sm font-semibold transition-all shadow-xs cursor-pointer"
                >
                  <Send size={15} />
                  <span>Enviar Mensaje a GENSEX</span>
                </button>
              </form>
            )}
          </div>

          {/* Institutional Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#e6ded4] space-y-5">
              <h3 className="font-serif text-xl font-bold text-[#1e1333]">
                Filiación Institucional
              </h3>

              <div className="flex items-start gap-3.5 text-sm text-stone-700">
                <Building size={20} className="text-[#df5a42] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#1e1333]">
                    Universidad Autónoma de Chile
                  </div>
                  <div className="text-xs text-stone-500">
                    Facultad de Ciencias Sociales y Humanidades
                  </div>
                  <div className="text-xs text-stone-500 font-medium">
                    Carrera de Trabajo Social
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm text-stone-700">
                <MapPin size={20} className="text-[#7e57c2] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#1e1333]">Sede Santiago</div>
                  <div className="text-xs text-stone-500">
                    Campus Providencia: Av. Pedro de Valdivia 425, Providencia, Región Metropolitana
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    Campus El Llano Subercaseaux: Ricardo Morales 3369, San Miguel
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm text-stone-700">
                <Mail size={20} className="text-[#df5a42] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#1e1333]">Contacto Directo</div>
                  <a
                    href="mailto:rodrigo.azocar@uautonoma.cl"
                    className="text-xs text-[#df5a42] hover:underline block"
                  >
                    rodrigo.azocar@uautonoma.cl
                  </a>
                  <span className="text-[11px] text-stone-400">
                    Director: Rodrigo Azócar González
                  </span>
                </div>
              </div>
            </div>

            {/* Scientific Repositories & Channels */}
            <div className="bg-[#2d184c] text-white p-6 sm:p-7 rounded-3xl space-y-3">
              <h4 className="font-serif text-lg font-bold text-white">
                Canales & Repositorios
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Encuentra las producciones del grupo en las principales plataformas de divulgación científica y social:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href="https://redliess.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-stone-200 transition-colors"
                >
                  <span>Red LIESS</span>
                  <ExternalLink size={11} />
                </a>
                <a
                  href="https://uautonoma.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-stone-200 transition-colors"
                >
                  <span>U. Autónoma Chile</span>
                  <ExternalLink size={11} />
                </a>
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#1DB954] hover:text-black text-xs font-semibold transition-colors"
                >
                  <span>Spotify Voces</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
