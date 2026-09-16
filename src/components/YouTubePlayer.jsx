import { useEffect, useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

/**
 * Custom YouTube player that:
 * - Loads the YouTube IFrame API on demand
 * - Autoplays muted (browser policy requires mute for autoplay)
 * - Hides YouTube's native controls (controls=0) so we can render our own
 * - Draws a brand-colored progress bar (moss → copper gradient)
 */
export default function YouTubePlayer({ videoId, className = '' }) {
  const containerRef = useRef(null)
  const playerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showOverlay, setShowOverlay] = useState(false)
  const [ready, setReady] = useState(false)

  // Load YT IFrame API and instantiate player
  useEffect(() => {
    let disposed = false

    function boot() {
      if (disposed || !containerRef.current) return
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          showinfo: 0,
        },
        events: {
          onReady: () => setReady(true),
          onStateChange: (e) => {
            if (e.data === window.YT.PlayerState.PLAYING) setIsPlaying(true)
            if (e.data === window.YT.PlayerState.PAUSED) setIsPlaying(false)
            if (e.data === window.YT.PlayerState.ENDED)  setIsPlaying(false)
          },
        },
      })
    }

    if (window.YT && window.YT.Player) {
      boot()
    } else {
      // If someone else already loaded the API, we chain onto it
      const prev = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prev === 'function') prev()
        boot()
      }
      if (!document.querySelector('script[data-yt-iframe-api]')) {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        tag.setAttribute('data-yt-iframe-api', '1')
        document.head.appendChild(tag)
      }
    }

    return () => {
      disposed = true
      try { playerRef.current?.destroy?.() } catch { /* noop */ }
    }
  }, [videoId])

  // Poll progress
  useEffect(() => {
    if (!ready) return
    const id = setInterval(() => {
      const p = playerRef.current
      if (!p || !p.getDuration) return
      const d = p.getDuration()
      const t = p.getCurrentTime()
      if (d > 0) setProgress((t / d) * 100)
    }, 200)
    return () => clearInterval(id)
  }, [ready])

  function togglePlay() {
    const p = playerRef.current
    if (!p) return
    if (isPlaying) p.pauseVideo()
    else p.playVideo()
  }

  function toggleMute() {
    const p = playerRef.current
    if (!p) return
    if (isMuted) { p.unMute(); setIsMuted(false) }
    else { p.mute(); setIsMuted(true) }
  }

  function seek(e) {
    const p = playerRef.current
    if (!p || !p.getDuration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = (e.clientX - rect.left) / rect.width
    p.seekTo(p.getDuration() * pct, true)
  }

  return (
    <div
      className={`relative w-full h-full group ${className}`}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <div ref={containerRef} className="absolute inset-0 w-full h-full [&>iframe]:w-full [&>iframe]:h-full" />

      {/* Click-catcher: click on the video toggles play (except on controls area) */}
      <button
        aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
        onClick={togglePlay}
        className="absolute inset-0 z-10 w-full h-full cursor-pointer"
      />

      {/* Overlay controls */}
      <div
        className={`absolute inset-x-0 bottom-0 z-20 pointer-events-none transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showOverlay || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="pointer-events-auto px-4 sm:px-6 pb-4 sm:pb-5 bg-gradient-to-t from-ink-900/70 via-ink-900/25 to-transparent">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
              className="w-9 h-9 sm:w-10 sm:h-10 grid place-items-center bg-paper text-ink-900 rounded-full transition-all duration-300 hover:bg-moss hover:text-ink-900"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} className="translate-x-[1px]" />}
            </button>

            <button
              onClick={toggleMute}
              aria-label={isMuted ? 'Ativar áudio' : 'Silenciar'}
              className="w-9 h-9 sm:w-10 sm:h-10 grid place-items-center bg-paper/10 text-paper rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-paper/20"
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>

            <div
              onClick={seek}
              role="slider"
              aria-label="Progresso do vídeo"
              aria-valuenow={Math.round(progress)}
              className="flex-1 h-1.5 bg-paper/20 rounded-full overflow-hidden cursor-pointer relative group/bar"
            >
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-moss via-moss to-copper transition-[width] duration-200 rounded-full"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-paper rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity"
                style={{ left: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
