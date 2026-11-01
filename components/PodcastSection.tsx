import React, { useState, useEffect } from 'react';
import {
  Headphones,
  Play,
  Pause,
  Volume2,
  Share2,
  Clock,
  Calendar,
  ExternalLink,
  Radio,
  Check
} from 'lucide-react';
import { PODCAST_EPISODES } from '../data/gensexData';
import { PodcastEpisode } from '../types';

export const PodcastSection: React.FC = () => {
  const [activeEpisode, setActiveEpisode] = useState<PodcastEpisode>(PODCAST_EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Parse duration "48 min" to seconds ~ 2880s for progress bar
  const durationSec = 2880;

  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTimeSec((prev) => (prev >= durationSec ? 0 : prev + 1));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = (episode?: PodcastEpisode) => {
    if (episode && episode.id !== activeEpisode.id) {
      setActiveEpisode(episode);
      setIsPlaying(true);
      setCurrentTimeSec(0);
      return;
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href + '#podcast');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="podcast" className="py-20 md:py-28 bg-white border-y border-[#e6ded4]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#df5a42] bg-[#df5a42]/10 mb-4">
            <Radio size={13} />
            Divulgación Sonora
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1e1333] leading-tight mb-4">
            Podcast "Voces GENSEX"
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Un espacio sonoro de conversación distendida, reflexiva y crítica sobre masculinidades, diversidades sexuales, epistemologías feministas y los 100 años del Trabajo Social.
          </p>
        </div>

        {/* Audio Player Card & Episodes Playlist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Featured Player */}
          <div className="lg:col-span-7 bg-[#2d184c] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#df5a42]/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7e57c2]/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              {/* Top bar with episode tag */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300">
                  <Radio size={13} />
                  Episodio #{activeEpisode.number}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleShare}
                    title="Compartir episodio"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xs text-stone-200 cursor-pointer"
                  >
                    {copiedLink ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} />}
                  </button>
                  <span className="text-xs text-stone-300 flex items-center gap-1">
                    <Clock size={12} /> {activeEpisode.duration}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                {activeEpisode.title}
              </h3>

              <p className="text-sm text-stone-300 leading-relaxed mb-6">
                {activeEpisode.description}
              </p>

              {/* Guests */}
              <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1.5">
                  Voces e Invitados/as
                </span>
                <ul className="space-y-1">
                  {activeEpisode.guests.map((guest, idx) => (
                    <li key={idx} className="text-xs text-stone-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#df5a42]"></span>
                      <span>{guest}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Player Controls */}
              <div className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-4">
                {/* Scrub bar */}
                <div className="space-y-1.5">
                  <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden cursor-pointer relative">
                    <div
                      className="h-full bg-gradient-to-r from-[#df5a42] to-amber-400 rounded-full transition-all duration-300"
                      style={{ width: `${(currentTimeSec / durationSec) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-stone-400">
                    <span>{formatTime(currentTimeSec)}</span>
                    <span>{activeEpisode.duration}</span>
                  </div>
                </div>

                {/* Main Play Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => togglePlay()}
                      className="w-13 h-13 rounded-full bg-[#df5a42] hover:bg-[#c84831] text-white flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
                      aria-label={isPlaying ? 'Pausar audio' : 'Reproducir audio'}
                    >
                      {isPlaying ? <Pause size={22} /> : <Play size={22} className="ml-0.5" />}
                    </button>

                    <div>
                      <div className="text-xs font-semibold text-white">
                        {isPlaying ? 'Reproduciendo episodio' : 'Pausado'}
                      </div>
                      <div className="text-[11px] text-stone-400">
                        {isPlaying ? 'Escuchando en alta fidelidad' : 'Haz clic para escuchar'}
                      </div>
                    </div>
                  </div>

                  {/* Equalizer animation when playing */}
                  <div className="flex items-end gap-1 h-6 px-2">
                    {[40, 90, 60, 100, 70, 30, 85].map((height, i) => (
                      <span
                        key={i}
                        className={`w-1 bg-amber-400 rounded-full transition-all duration-300 ${
                          isPlaying ? 'animate-pulse' : 'opacity-30'
                        }`}
                        style={{ height: isPlaying ? `${height}%` : '20%' }}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Streaming Links */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-300">
                <span>Disponible también en plataformas:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-[#1DB954] hover:text-black font-semibold transition-all"
                  >
                    <span>Spotify</span>
                    <ExternalLink size={12} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-[#FF0000] hover:text-white font-semibold transition-all"
                  >
                    <span>YouTube</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Playlist Column */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif text-lg font-bold text-[#1e1333]">
                Episodios de la Temporada
              </h3>
              <span className="text-xs text-stone-500 font-medium">
                {PODCAST_EPISODES.length} episodios
              </span>
            </div>

            {PODCAST_EPISODES.map((ep) => {
              const isCurrent = ep.id === activeEpisode.id;
              return (
                <div
                  key={ep.id}
                  onClick={() => togglePlay(ep)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? 'bg-white border-[#df5a42] shadow-sm ring-1 ring-[#df5a42]'
                      : 'bg-white/70 border-[#e6ded4] hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isCurrent && isPlaying
                          ? 'bg-[#df5a42] text-white'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {isCurrent && isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-stone-400 mb-1">
                        <span>Episodio #{ep.number}</span>
                        <span>•</span>
                        <span>{ep.date}</span>
                        <span>•</span>
                        <span>{ep.duration}</span>
                      </div>

                      <h4
                        className={`text-sm font-bold line-clamp-2 leading-snug ${
                          isCurrent ? 'text-[#df5a42]' : 'text-stone-800'
                        }`}
                      >
                        {ep.title}
                      </h4>

                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {ep.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-1.5 py-0.5 rounded text-[10px] bg-stone-100 text-stone-500 font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
